"use server"

import { CreateEventParams, EventsByCategoryParams } from "@/types";
import { connectToDatabase } from "../database";
import { handleError } from "../utils";
import User from "../database/models/user.model";
import Event from "../database/models/event.model";
import Category from "../database/models/category.model";

const populateOptions = async (query: any) => {
    return query
        .populate({ path: "organizer", model: User, select: "_id firstName lastName" })
        .populate({ path: "category", model: Category, select: "_id name" })
}

export const createEvent = async ({ event, userId, path }: CreateEventParams) => {
    try {
        await connectToDatabase();

        const organizer = await User.findById(userId);

        if (!organizer) {
            throw new Error("User not found");
        }

        const newEvent = await Event.create({
            ...event,
            category: event.categoryId,
            organizer: organizer._id
        });

        return JSON.parse(JSON.stringify(newEvent));
    } catch (error) {
        handleError(error);
    }
}

export const getAllEvents = async () => {
    try {
        await connectToDatabase();

        const events = await populateOptions(Event.find());

        return JSON.parse(JSON.stringify(events));
    } catch (error) {
        handleError(error);
    }
}

export const getEvent = async (eventId: string) => {
    try {
        await connectToDatabase();

        const event = await populateOptions(Event.findById(eventId));

        if (!event) {
            throw new Error("Event not found");
        }

        return JSON.parse(JSON.stringify(event));
    } catch (error) {
        handleError(error);
    }
}

export const getEventByCategory = async ({ categoryId, eventId, limit = 3, page = 1 }: EventsByCategoryParams) => {
    try {
        await connectToDatabase();
        const skipAmount = (Number(page) - 1) * limit
        const conditions = { $and: [{ category: categoryId }, { _id: { $ne: eventId } }] }

        const eventsQuery = Event.find(conditions)
            .sort({ createdAt: 'desc' })
            .skip(skipAmount)
            .limit(limit)

        const events = await populateOptions(eventsQuery)
        const eventsCount = await Event.countDocuments(conditions)

        return { data: JSON.parse(JSON.stringify(events)), totalPages: Math.ceil(eventsCount / limit) }
    } catch (error) {
        handleError(error);
    }
}