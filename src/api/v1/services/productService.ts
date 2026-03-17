import Product from "../../../models/product"
import  {addDocument, getAllProducts, deleteProduct, getProductById} from "../repository/productRepo"

// export const getAllEventsService = (): EventsCount => {
//     return {events: events, count: events.length};
// };

// export const getEventByIdService = (id: number): Event | undefined => {
//     let event = events.find(x => x.id == id)

//     return event;
// };

// export const getEVentPopularityService = (id:number): {} => {
//     // Logic to process all items from the database
// // find event
// //     let event = events.find(x => x.id == id);

// // let score = (event.registrationCount / event.capacity) * 100;

// //     return  {
// //         event: event,
// //         spotsRemanin: event?.capacity - event?.registrationCount,
// //         popularityScore: score,
// //         popularityTier: getPopluartiTier(score)
// //     };

// return {}
// };


export const createProductService = async (newProduct: Product): Promise<string> => {
    // Logic to add a new item to the database

    let newProductId = await addDocument(newProduct)

    return newProductId;
};

export const getAllProductsService = async (): Promise<(Product & { id: string })[]> => {
    // Logic to retrieve all products from the database
    const products = await getAllProducts();
    return products;
};

export const getProductByIdService = async (productId: string): Promise<(Product & { id: string }) | null> => {
    // Logic to retrieve a specific product from the database
    const product = await getProductById(productId);
    return product;
};

export const deleteProductService = async (productId: string): Promise<boolean> => {
    // Logic to delete a product from the database
    const result = await deleteProduct(productId);
    return result;
};

// export const updateEventService = (id: number, item: string): string => {
//     // Logic to update an item in the database
//     return "Item updated";
// };

// export const deleteEventService = (id: number) => {
//     // Logic to delete an item from the database
//     let itemtoDeleteIndex = events.findIndex(x => x.id === id);

//     if (-1){
//         return;
//     }

//     events.splice(itemtoDeleteIndex, 1)

//     return;
// };