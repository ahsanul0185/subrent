import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, where, serverTimestamp, updateDoc } from "firebase/firestore"
import { db } from "./firebase"
import { toast } from "sonner";



export const createReview = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "reviews"), {
      ...data,
      createdAt: serverTimestamp()
    })

    return {
      success: true,
      id: docRef.id
    }
  } catch (error) {
    console.log(error)
    toast.error(error.message || "Failed to create review")
    return {
      success: false,
      error: error.message || error
    }
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
    toast.error(error.message || "Failed to create review")
    return {
      success: false,
      error: error.message || error
    }
  }

}

export const getApprovedReviews = async () => {
  try {
    const reviewsRef = collection(db, "reviews");
    const q = query(reviewsRef, where("status", "==", "APPROVED"));
    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.log(error)
    toast.error(error.message || "Failed to create review")
    return []
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



// Get a single review by ID
export const getReviewById = async (id) => {
  try {
    const docRef = doc(db, "reviews", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { success: true, data: { id: docSnap.id, ...docSnap.data() } };
    } else {
      return { success: false, error: "Review not found" };
    }
  } catch (error) {
    console.error("Fetch review failed:", error);
    return { success: false, error: error.message };
  }
};


export const updateReview = async (id, updatedData) => {
  try {
    await updateDoc(doc(db, "reviews", id), updatedData);
    toast.success("Review updated successfully");
    return { success: true };
  } catch (error) {
    console.error("Update review failed:", error);
    toast.error("Failed to update review");
    return { success: false, error: error.message };
  }
};