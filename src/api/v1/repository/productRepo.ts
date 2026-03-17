import { db } from "../config/firebaseConfig";
import { DocumentReference, QuerySnapshot } from "firebase-admin/firestore";
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

export const getAllProducts = async (): Promise<(Product & { id: string })[]> => {
    // Retrieve all products from the Firestore collection
    const snapshot: QuerySnapshot = await db.collection("products").get();
    
    const products: (Product & { id: string })[] = [];
    snapshot.forEach((doc) => {
        const productData = doc.data() as Product;
        products.push({
            ...productData,
            id: doc.id
        });
    });
    
    return products;
};

export const deleteProduct = async (productId: string): Promise<boolean> => {
    // Delete a product by its ID from the Firestore collection
    await db.collection("products").doc(productId).delete();
    return true;
};