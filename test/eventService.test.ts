import {getAllEventsService} from "../src/api/v1/services/eventService"


describe("GET /api/v1/health", () => {
    it("should return 200 status code", async () => {
        // Act
        let events = getAllEventsService();
        
        // Assert
        expect(events.count).toBe(3);
    });

   
});