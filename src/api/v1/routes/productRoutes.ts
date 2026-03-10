import { Router } from 'express';
import { createProduct } from '../controllers/eventController';
import { validateRequest } from "../middleware/validate";
import { productSchemas } from "../validation/productSchemas";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize"

const router: Router = Router();

// Define routes
// router.get('/products', getAllProducts);
// router.get('/products/:id', getEventById);
router.post('/products', validateRequest(productSchemas.create), createProduct);
router.get('/products/:id', authenticate, isAuthorized({hasRole: ["user"]}) , validateRequest(productSchemas.create), createProduct);

// router.put('/products/:id', updateEvent);
// router.delete('/products/:id', deleteEvent);


export default router;
