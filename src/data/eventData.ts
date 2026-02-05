import { Event } from "../api/v1/services/eventService"

export const events: Event[] = [
    {
        id: 1,
        name: "Tech Conference 2025",
        date: new Date("2025-03-15T09:00:00.000Z"),
        capacity: 200,
        registrationCount: 185
    },
    {
        id: 2,
        name: "Startup Pitch Night",
        date: new Date("2025-02-20T18:00:00.000Z"),
        capacity: 50,
        registrationCount: 12
    },
    {
        id: 3,
        name: "Web Dev Workshop",
        date: new Date("2025-02-10T10:00:00.000Z"),
        capacity: 30,
        registrationCount: 30
    }
];