
import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";


export async function getItems(userId) {
  try {
    const itemsRef = collection(db, "users", userId, "items");
    const snapshot = await getDocs(itemsRef);

    const items = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(), 
    }));

    return items;
  } catch (error) {
    console.error("Error fetching items from Firestore:", error);
    return [];
  }
}


export async function addItem(userId, itemData) {
  try {
    const itemsRef = collection(db, "users", userId, "items");

    const docRef = await addDoc(itemsRef, {
      name: itemData.name,
      quantity: itemData.quantity,
      category: itemData.category,
    });

    return {
      id: docRef.id,
      name: itemData.name,
      quantity: itemData.quantity,
      category: itemData.category,
    };
  } catch (error) {
    console.error("Error adding item to Firestore:", error);
    throw error;
  }
}
