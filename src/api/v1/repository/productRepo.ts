import { db } from "../config/firebaseConfig";
import { DocumentReference } from "firebase-admin/firestore";
import Product from "src/models/product";

export const addDocument = async (product: Product): Promise<string> => {
    // Create a reference to a document in the 'users' collection with ID 'user1'
    // If the document doesn't exist, it will be created
    const docRef: DocumentReference = db.collection("products").doc();

    product.createdAt = new Date();
    product.updatedAt = new Date();
    // Use the `set` method to add or overwrite data in the document
    // The data is passed as an object with fields and their values
    await docRef.set(product);
    return docRef.id;
};