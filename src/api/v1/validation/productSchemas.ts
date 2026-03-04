import Joi, { ObjectSchema } from "joi";

// Post operation schemas organized by request part
export const productSchemas = {
    // POST /posts - Create new post
    create: {
        body: Joi.object({
            name: Joi.string().min(2).max(80).required().messages({
                "any.required": "name is required",
                "string.empty": "name cannot be empty",
            }),
            sku: Joi.string().pattern(/^[A-Z]{3}\d{4}$/).required().messages({
                "any.required": "sku is required",
                "string.empty": "sku cannot be empty",
            }),
            quantity: Joi.number().integer().min(0).required().messages({
                "any.required": "quantity is required",
                "string.empty": "quantity cannot be empty",
            }),
            price: Joi.number()
                .positive()
                .precision(2)
                .prefs({ convert: false }) // Ensures validation fails if precision is more than 2
                .required().messages({
                    "any.required": "price is required",
                    "string.empty": "price cannot be empty",
                }),
            category: Joi.string().valid('electronics', 'clothing', 'food', 'tools', 'other').required().messages({
                "any.required": "category is required",
                "string.empty": "category cannot be empty",
            }),

        }),
    },

    // // GET /posts/:id - Get single post
    // getById: {
    //     params: Joi.object({
    //         id: Joi.string().required().messages({
    //             "any.required": "Post ID is required",
    //             "string.empty": "Post ID cannot be empty",
    //         }),
    //     }),
    //     query: Joi.object({
    //         include: Joi.string().valid("comments", "author").optional(),
    //     }),
    // },

    // // PUT /posts/:id - Update post
    // update: {
    //     params: Joi.object({
    //         id: Joi.string().required().messages({
    //             "any.required": "Post ID is required",
    //             "string.empty": "Post ID cannot be empty",
    //         }),
    //     }),
    //     body: Joi.object({
    //         content: Joi.string().optional().messages({
    //             "string.empty": "Content cannot be empty",
    //         }),
    //     }),
    // },

    // // DELETE /posts/:id - Delete post
    // delete: {
    //     params: Joi.object({
    //         id: Joi.string().required().messages({
    //             "any.required": "Post ID is required",
    //             "string.empty": "Post ID cannot be empty",
    //         }),
    //     }),
    // },

    // // GET /posts - List posts with filtering
    // list: {
    //     query: Joi.object({
    //         page: Joi.number().integer().min(1).default(1),
    //         limit: Joi.number().integer().min(1).max(100).default(10),
    //         userId: Joi.string().optional(),
    //         sortBy: Joi.string()
    //             .valid("createdAt", "updatedAt")
    //             .default("createdAt"),
    //         sortOrder: Joi.string().valid("asc", "desc").default("desc"),
    //     }),
    // },
};