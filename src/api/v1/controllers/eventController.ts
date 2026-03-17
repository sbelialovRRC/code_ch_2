import { Request, Response } from "express";
import { createProductService, getAllProductsService, deleteProductService } from "../services/productService"
import {HTTP_STATUS} from "../../../constants/httpConstants"

// export const getAllEvents = (req: Request, res: Response) => {
//     // Logic to get all items

//     let result = getAllEventsService()
//     res.status(HTTP_STATUS.OK).json(result);
// };

export const getProductById = (req: Request, res: Response) => {
    let id = Number(req.params.id)

    if (Number.isNaN(id)) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({ error: "id must be convertible toi number" });
        return;
    }


    res.status(HTTP_STATUS.OK).json({id: 12, name: "test", price: 12.99});
};

// export const getEventPopularity = (req: Request, res: Response) => {
//     // let result = getEVentPopularityService()
//     res.status(200).json({});
// };

export const createProduct = async (req: Request, res: Response) => {
    let newEvent = req.body

    let result = await createProductService(newEvent)
    res.status(200).json(result);
};

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await getAllProductsService();
        res.status(HTTP_STATUS.OK).json({
            success: true,
            data: products,
            count: products.length
        });
    } catch (error) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
            success: false,
            error: "Failed to retrieve products"
        });
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const productId = req.params.id;

        if (!productId) {
            res.status(HTTP_STATUS.BAD_REQUEST).json({
                success: false,
                error: "Product ID is required"
            });
            return;
        }

        const result = await deleteProductService(productId);

        if (result) {
            res.status(HTTP_STATUS.OK).json({
                success: true,
                message: `Product with ID ${productId} deleted successfully`
            });
        } else {
            res.status(HTTP_STATUS.NOT_FOUND).json({
                success: false,
                error: "Product not found"
            });
        }
    } catch (error) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
            success: false,
            error: "Failed to delete product"
        });
    }
};

// export const updateEvent = (req: Request, res: Response) => {
//      let newEvent = req.body
//      let id = Number(req.params.id)

//     let result = updateEventService(12, "test")
//     res.status(200).json(result);
// };