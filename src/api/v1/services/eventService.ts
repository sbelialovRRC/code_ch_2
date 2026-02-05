


export const getAllEventsService = (): string[] => {
    // Logic to process all items from the database
    return ["Item 1", "Item 2"];
};

export const getEventByIdService = (): string[] => {
    // Logic to process all items from the database
    return ["Item 1", "Item 2"];
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