import { Router } from 'express';
import { getAllEvents, getEventById, getEventPopularity, createEvent, deleteEvent, updateEvent } from '../controllers/eventController';

const router: Router = Router();

// Define routes
router.get('/events', getAllEvents);
router.get('/events/:id', getEventById);
router.get('/events/:id/popularity', getEventPopularity);
router.post('/events', createEvent);
router.put('/events/:id', deleteEvent);
router.delete('/events/:id', updateEvent);


export default router;
