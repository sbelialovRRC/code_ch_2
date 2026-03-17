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
 * /users:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *                 minLength: 2
 *                 maxLength: 50
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "john@example.com"
 *               role:
 *                 type: string
 *                 enum: [user, admin]
 *                 default: user
 *     responses:
 *       '201':
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       '400':
 *         description: Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       '409':
 *         description: User with this email already exists
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
router.get('/products', authenticate, getAllProducts);


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
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 price:
 *                   type: number
 *       '401':
 *         description: Unauthorized - Missing or invalid authentication token
 *       '500':
 *         description: Internal server error
 */
router.get('/products/:id', authenticate, getProductById);


/**
 * @openapi
 * /products/{productId}:
 *   delete:
 *     summary: Delete a product by ID
 *     description: Permanently delete a product from the system
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: productId
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
router.delete('/products/:id', authenticate, deleteProduct);


export default router;
