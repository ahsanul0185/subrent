import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "./firebase"



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
