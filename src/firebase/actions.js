import { addDoc, collection, deleteDoc, doc, getDocs, serverTimestamp, updateDoc } from "firebase/firestore"
import { db } from "./firebase"
import { toast } from "sonner";



export const createReview = async (data) => {
   try {
    const docRef  = await addDoc(collection(db, "reviews"), {
        ...data,
        createdAt: serverTimestamp()
    })

    return {
      success: true,
      id: docRef.id
    };
   } catch (error) {
    console.log(error)
    toast.error(error)
   }
}


export const getAllReviews = async () => {
  try {
     const snapshot = await getDocs(collection(db, "reviews"))
       return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  } catch (error) {
    console.log(error)
    toast.error(error)
  }

}



// Approve review
export const approveReview = async (id) => {
  try {
    await updateDoc(doc(db, "reviews", id), {
      status: "APPROVED"
    });
    toast.success("Review approved");
    return { success: true };
  } catch (error) {
    console.error("Approve failed:", error);
    toast.error("Failed to approve review");
    return { success: false, error: error.message };
  }
};

// Reject review
export const rejectReview = async (id) => {
  try {
    await updateDoc(doc(db, "reviews", id), {
      status: "REJECTED"
    });
    toast.success("Review rejected");
    return { success: true };
  } catch (error) {
    console.error("Reject failed:", error);
    toast.error("Failed to reject review");
    return { success: false, error: error.message };
  }
};


export const deleteReview = async (id) => {
  try {
    await deleteDoc(doc(db, "reviews", id));
    toast.success("Review deleted");
    return { success: true };
  } catch (error) {
    console.error("Delete failed:", error);
    toast.error("Failed to delete review");
    return { success: false, error: error.message };
  }
};
