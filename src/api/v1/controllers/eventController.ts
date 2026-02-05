import { Request, Response } from "express";
import { getAllEventsService, getEVentPopularityService, getEventByIdService, createEventService, updateEventService, deleteEventService } from "../services/eventService"

export const getAllEvents = (req: Request, res: Response) => {
    // Logic to get all items

    let result = getAllEventsService()
    res.status(200).json(result);
};

export const getEventById = (req: Request, res: Response) => {
    let result = getEventByIdService()
    res.status(200).json(result);
};

export const getEventPopularity = (req: Request, res: Response) => {
    let result = getEVentPopularityService()
    res.status(200).json(result);
};

export const createEvent = (req: Request, res: Response) => {
    let result = createEventService("test")
    res.status(200).json(result);
};

export const updateEvent = (req: Request, res: Response) => {
    let result = updateEventService(12,"test")
    res.status(200).json(result);
};

export const deleteEvent = (req: Request, res: Response) => {
    let result = deleteEventService(12)
    res.status(200).json(result);
};