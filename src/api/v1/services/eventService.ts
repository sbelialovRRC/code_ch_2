import { count } from "console";
import { events } from "../../../data/eventData"
 

export interface Event {
    id: number,
    name: string,
    date: Date,
    capacity: number,
    registrationCount: number
}


export const getAllEventsService = (): {} => {
    return {events: events, count: events.length};
};

export const getEventByIdService = (id: number): Event | undefined => {
    let event = events.find(x => x.id == id)

    return event;
};

export const getEVentPopularityService = (): string[] => {
    // Logic to process all items from the database
    return ["Item 1", "Item 2"];
};


export const createEventService = (item: string): string => {
    // Logic to add a new item to the database
    return "Item added";
};

export const updateEventService = (id: number, item: string): string => {
    // Logic to update an item in the database
    return "Item updated";
};

export const deleteEventService = (id: number): string => {
    // Logic to delete an item from the database
    return "Item deleted";
};