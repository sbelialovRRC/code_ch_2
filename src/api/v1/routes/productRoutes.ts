import { Router } from 'express';
import { createProduct , getProductById} from '../controllers/eventController';
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
 * /products/{productId}:
 *   get:
 *     summary: Retrieve a list of products with optional filtering
 *     tags: [Products]
 *     parameters:
 *       - name: productId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Id of the product to retrieve
 *     responses:
 *       '200':
 *        description: A product object
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                name:
 *                  type: string
 *                price:
 *                  type: number
 */
router.get('/products/:id', authenticate, getProductById);  



export default router;
