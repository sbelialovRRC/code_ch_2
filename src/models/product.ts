

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - sku
 *         - quantity
 *         - price
 *         - category
 *         - createdAt
 *         - updatedAt
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the product
 *           example: "prod_abc123"
 *         name:
 *           type: string
 *           minLength: 2
 *           maxLength: 80
 *           description: Name of the product
 *           example: "Wireless Headphones"
 *         sku:
 *           type: string
 *           pattern: '^[A-Z]{3}\d{4}$'
 *           description: Stock keeping unit identifier
 *           example: "ELC0042"
 *         quantity:
 *           type: integer
 *           minimum: 0
 *           description: Available stock quantity
 *           example: 150
 *         price:
 *           type: number
 *           format: float
 *           minimum: 0
 *           description: Price of the product
 *           example: 49.99
 *         category:
 *           type: string
 *           enum: [electronics, clothing, food, tools, other]
 *           description: Product category
 *           example: "electronics"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the product was created
 *           example: "2024-01-15T10:30:00Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the product was last updated
 *           example: "2024-01-20T14:45:00Z"
 */
export default interface Product {
    id: string;
    name: string
    sku: string
    quantity: number
    price: number
    category: string
    createdAt: Date
    updatedAt: Date
}