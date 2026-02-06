import { count } from "console";
import { events } from "../../../data/eventData"
 

export interface Event {
    id: number,
    name: string,
    date: Date,
    capacity: number,
    registrationCount: number
}

interface EventsCount {
    events: Event[],
    count: number
}


export const getAllEventsService = (): EventsCount => {
    return {events: events, count: events.length};
};

export const getEventByIdService = (id: number): Event | undefined => {
    let event = events.find(x => x.id == id)

    return event;
};

export const getEVentPopularityService = (id:number): {} => {
    // Logic to process all items from the database
// find event
//     let event = events.find(x => x.id == id);

// let score = (event.registrationCount / event.capacity) * 100;

//     return  {
//         event: event,
//         spotsRemanin: event?.capacity - event?.registrationCount,
//         popularityScore: score,
//         popularityTier: getPopluartiTier(score)
//     };

return {}
};


export const createEventService = (newEvent: Event): Event => {
    // Logic to add a new item to the database
    events.push(newEvent)
    return newEvent;
};

export const updateEventService = (id: number, item: string): string => {
    // Logic to update an item in the database
    return "Item updated";
};

export const deleteEventService = (id: number) => {
    // Logic to delete an item from the database
    let itemtoDeleteIndex = events.findIndex(x => x.id === id);

    if (-1){
        return;
    }

    events.splice(itemtoDeleteIndex, 1)

    return;
};