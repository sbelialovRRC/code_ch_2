import request from "supertest";
import app from "../src/app";
import * as eventController from "../src/api/v1/controllers/eventController";

jest.mock("../src/api/v1/controllers/eventController", () => ({
    getAllEvents: jest.fn((req, res) => res.status(200).send()),
    getEventById: jest.fn((req, res) => res.status(200).send()),
    getEventPopularity: jest.fn((req, res) => res.status(200).send()),
    createEvent: jest.fn((req, res) => res.status(201).send()),
    updateEvent: jest.fn((req, res) => res.status(200).send()),
    deleteEvent: jest.fn((req, res) => res.status(200).send()),
}));

describe("Item API Endpoints", () => {
    it("should call createEvent controller", async () => {
        // Arrage
        const mockItem = {
            name: "Test Item",
            description: "Test Description",
        };

        // Act
        await request(app).post("/api/v1/events").send(mockItem);

        // Assert
        expect(eventController.createEvent).toHaveBeenCalled();
    });

    it("should call getAllItems controller", async () => {
        await request(app).get("/api/v1/events");

        expect(eventController.getAllEvents).toHaveBeenCalled();
    });

    it("should call updateEvent controller", async () => {
        const mockItem = {
            name: "Updated Item",
            description: "Updated Description",
        };
        await request(app).put("/api/v1/events/1").send(mockItem);

        expect(eventController.updateEvent).toHaveBeenCalled();
    });

    it("should call deleteItem controller", async () => {
        await request(app).delete("/api/v1/events/1");

        expect(eventController.deleteEvent).toHaveBeenCalled();
    });
});