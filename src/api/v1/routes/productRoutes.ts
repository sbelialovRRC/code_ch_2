import { Router } from 'express';
import { createProduct } from '../controllers/eventController';
import { validateRequest } from "../middleware/validate";
import { productSchemas } from "../validation/productSchemas";

const router: Router = Router();

// Define routes
// router.get('/products', getAllProducts);
// router.get('/products/:id', getEventById);
router.post('/products', validateRequest(productSchemas.create), createProduct);
// router.put('/products/:id', updateEvent);
// router.delete('/products/:id', deleteEvent);


export default router;
