import { Router } from 'express';
import { createProduct, getProductById, getAllProducts, deleteProduct } from '../controllers/eventController';
import { validateRequest } from "../middleware/validate";
import { productSchemas } from "../validation/productSchemas";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize"
import { get } from 'http';

const router: Router = Router();

// Define routes
/**
 * @openapi
 * /products:
 *   post:
 *     summary: Create a new product
 *     description: Add a new product to the inventory
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - sku
 *               - quantity
 *               - price
 *               - category
 *             properties:
 *               name:
 *                 type: string
 *                 minLength: 2
 *                 maxLength: 80
 *                 example: "Wireless Headphones"
 *               sku:
 *                 type: string
 *                 pattern: '^[A-Z]{3}\d{4}$'
 *                 example: "ELC0042"
 *               quantity:
 *                 type: integer
 *                 minimum: 0
 *                 example: 150
 *               price:
 *                 type: number
 *                 format: float
 *                 minimum: 0
 *                 example: 49.99
 *               category:
 *                 type: string
 *                 enum: [electronics, clothing, food, tools, other]
 *                 example: "electronics"
 *     responses:
 *       '201':
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "prod_abc123"
 *               description: ID of the newly created product
 *       '400':
 *         description: Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *       '401':
 *         description: Unauthorized - Missing or invalid authentication token
 *       '500':
 *         description: Internal server error
 */
router.post('/products', validateRequest(productSchemas.create), createProduct);


/**
 * @openapi
 * /products:
 *   get:
 *     summary: Retrieve all products
 *     description: Get a list of all products available in the system
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Successfully retrieved all products
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     allOf:
 *                       - type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                             description: Product ID from Firestore
 *                       - $ref: '#/components/schemas/Product'
 *                 count:
 *                   type: integer
 *                   description: Total number of products
 *                   example: 5
 *       '401':
 *         description: Unauthorized - Missing or invalid authentication token
 *       '500':
 *         description: Internal server error
 */
router.get('/products', getAllProducts);


/**
 * @openapi
 * /products/{id}:
 *   get:
 *     summary: Retrieve a product by ID
 *     description: Fetch details of a specific product using its ID
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the product to retrieve
 *         example: "prod_abc123"
 *     responses:
 *       '200':
 *         description: Product details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Product'
 *       '401':
 *         description: Unauthorized - Missing or invalid authentication token
 *       '404':
 *         description: Product not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: "Product not found"
 *       '500':
 *         description: Internal server error
 */
router.get('/products/:id', authenticate, getProductById);


/**
 * @openapi
 * /products/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     description: Permanently delete a product from the system
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the product to delete
 *         example: "prod_abc123"
 *     responses:
 *       '200':
 *         description: Product deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Product with ID prod_abc123 deleted successfully"
 *       '400':
 *         description: Bad request - Product ID is required
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: "Product ID is required"
 *       '401':
 *         description: Unauthorized - Missing or invalid authentication token
 *       '404':
 *         description: Product not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: "Product not found"
 *       '500':
 *         description: Internal server error
 */
router.delete('/products/:id', deleteProduct);


export default router;
