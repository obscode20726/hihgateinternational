"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Interface defining the structure of an Event object
// id is optional since it may not be present for new events
// All other fields are required strings
interface Event {
    id?: string;
    title: string;
    startDate: string;
    endDate: string;
    description: string;
    location: string;
    imageUrl: string;
    frenchNote: string;
}

// Interface defining the structure of a SchoolLife entry
// id is optional since it may not be present for new entries
// All other fields are required strings

export default function EventManagement() {
    // --- Section: Tab state ---
    // State managing which dashboard tab is active (events or school-life)
    const [activeTab] = useState<"events" | "school-life">("events");

    // --- Section: Events state ---
    // Holds all events and related form state
    const [events, setEvents] = useState<Event[]>([]);
    const [event, setEvent] = useState<Event>({
        title: "",
        startDate: "",
        endDate: "",
        description: "",
        location: "",
        imageUrl: "",
        frenchNote: "",
    });
    // Loading and notification indicators for events
    const [eventLoading, setEventLoading] = useState(false);
    const [eventFetching, setEventFetching] = useState(true);
    const [eventNotification, setEventNotification] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });
    // Track editing and delete confirmation
    const [eventEditingId, setEventEditingId] = useState<string | null>(null);
    const [showEventDeleteConfirm, setShowEventDeleteConfirm] = useState<
        string | null
    >(null);
    const [eventFormErrors, setEventFormErrors] = useState<
        Record<string, string>
    >({});

    // --- Section: Fetch events effect ---
    useEffect(() => {
        if (activeTab === "events") {
            const fetchEvents = async () => {
                setEventFetching(true);
                try {
                    const response = await fetch("/api/events");
                    if (!response.ok)
                        throw new Error(
                            `HTTP error! status: ${response.status}`
                        );
                    const data = await response.json();
                    if (Array.isArray(data)) setEvents(data);
                } catch {
                    setEventNotification({
                        type: "error",
                        message: "Failed to load events. Please try again.",
                    });
                } finally {
                    setEventFetching(false);
                }
            };
            fetchEvents();
        }
    }, [activeTab]);

    useEffect(() => {
        if (eventNotification.type) {
            const timer = setTimeout(
                () => setEventNotification({ type: null, message: "" }),
                5000
            );
            return () => clearTimeout(timer);
        }
    }, [eventNotification]);

    const validateEventForm = () => {
        const errors: Record<string, string> = {};
        if (!event.title.trim()) errors.title = "Title is required";
        if (!event.startDate) errors.startDate = "Start date is required";
        if (!event.endDate) errors.endDate = "End date is required";
        else if (new Date(event.endDate) < new Date(event.startDate))
            errors.endDate = "End date must be after start date";
        if (!event.description.trim())
            errors.description = "Description is required";
        if (!event.location.trim()) errors.location = "Location is required";
        if (!event.imageUrl.trim()) errors.imageUrl = "Image URL is required";
        else if (!isValidUrl(event.imageUrl))
            errors.imageUrl = "Please enter a valid URL";
        setEventFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValidUrl = (url: string) => {
        // This function is shared, keep one instance
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    };

    const handleEventSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateEventForm()) {
            setEventNotification({
                type: "error",
                message: "Please fix the errors in the form",
            });
            return;
        }
        setEventLoading(true);
        try {
            const url = eventEditingId
                ? `/api/events/${eventEditingId}`
                : "/api/events";
            const method = eventEditingId ? "PUT" : "POST";
            const response = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(event),
            });
            if (response.ok) {
                setEvent({
                    title: "",
                    startDate: "",
                    endDate: "",
                    description: "",
                    location: "",
                    imageUrl: "",
                    frenchNote: "",
                });
                setEventEditingId(null);
                setEventNotification({
                    type: "success",
                    message: eventEditingId
                        ? "Event updated successfully!"
                        : "Event created successfully!",
                });
                const eventsResponse = await fetch("/api/events"); // Refresh list
                if (eventsResponse.ok) {
                    const data = await eventsResponse.json();
                    if (Array.isArray(data)) setEvents(data);
                }
            } else {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to save event");
            }
        } catch (error) {
            console.error("Error saving event:", error);
            setEventNotification({
                type: "error",
                message:
                    error instanceof Error
                        ? error.message
                        : "Failed to save event. Please try again.",
            });
        } finally {
            setEventLoading(false);
        }
    };

    const handleEventEdit = (eventToEdit: Event) => {
        setEvent({
            title: eventToEdit.title,
            startDate: eventToEdit.startDate,
            endDate: eventToEdit.endDate,
            description: eventToEdit.description,
            location: eventToEdit.location,
            imageUrl: eventToEdit.imageUrl,
            frenchNote: eventToEdit.frenchNote,
        });
        setEventEditingId(eventToEdit.id || null);
        document
            .getElementById("event-form")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    const handleEventDelete = async (id: string) => {
        setEventLoading(true);
        try {
            const response = await fetch(`/api/events/${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                setEvents(events.filter((ev) => ev.id !== id));
                setEventNotification({
                    type: "success",
                    message: "Event deleted successfully!",
                });
            } else {
                throw new Error("Failed to delete event");
            }
        } catch (error) {
            console.error("Error deleting event:", error);
            setEventNotification({
                type: "error",
                message: "Failed to delete event. Please try again.",
            });
        } finally {
            setEventLoading(false);
            setShowEventDeleteConfirm(null);
        }
    };

    const cancelEventEdit = () => {
        setEvent({
            title: "",
            startDate: "",
            endDate: "",
            description: "",
            location: "",
            imageUrl: "",
            frenchNote: "",
        });
        setEventEditingId(null);
        setEventFormErrors({});
    };

    return (
        <div className="flex h-screen bg-[#f5f6fa]">
            {/* Main Content */}
            {/* Content Area */}
            <div className="p-6 w-full">
                {activeTab === "events" && (
                    <div className="space-y-6">
                        {eventNotification.type && (
                            <div
                                className={`p-4 rounded-md ${
                                    eventNotification.type === "success"
                                        ? "bg-green-50 text-green-800 border border-green-200"
                                        : "bg-red-50 text-red-800 border border-red-200"
                                }`}
                            >
                                {eventNotification.message}
                            </div>
                        )}

                        {/* Event Form */}
                        <div className="bg-white rounded-md shadow-sm">
                            <div className="p-6">
                                <div className="mb-6">
                                    <h3 className="text-base font-medium text-gray-800">
                                        {eventEditingId
                                            ? "Edit Event"
                                            : "Add New Event"}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Fill in the fields below to{" "}
                                        {eventEditingId
                                            ? "update the"
                                            : "create a new"}{" "}
                                        event.
                                    </p>
                                </div>

                                <form
                                    onSubmit={handleEventSubmit}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                htmlFor="title"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Event Title
                                            </label>
                                            <input
                                                type="text"
                                                id="title"
                                                value={event.title}
                                                onChange={(e) =>
                                                    setEvent({
                                                        ...event,
                                                        title: e.target.value,
                                                    })
                                                }
                                                className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-gray-300"
                                                required
                                            />
                                            {eventFormErrors.title && (
                                                <p className="mt-1 text-sm text-red-600">
                                                    {eventFormErrors.title}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="startDate"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Start Date
                                            </label>
                                            <input
                                                type="date"
                                                id="startDate"
                                                value={event.startDate}
                                                onChange={(e) =>
                                                    setEvent({
                                                        ...event,
                                                        startDate:
                                                            e.target.value,
                                                    })
                                                }
                                                className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-gray-300"
                                                required
                                            />
                                            {eventFormErrors.startDate && (
                                                <p className="mt-1 text-sm text-red-600">
                                                    {eventFormErrors.startDate}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="endDate"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                End Date
                                            </label>
                                            <input
                                                type="date"
                                                id="endDate"
                                                value={event.endDate}
                                                onChange={(e) =>
                                                    setEvent({
                                                        ...event,
                                                        endDate: e.target.value,
                                                    })
                                                }
                                                className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-gray-300"
                                                required
                                            />
                                            {eventFormErrors.endDate && (
                                                <p className="mt-1 text-sm text-red-600">
                                                    {eventFormErrors.endDate}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="location"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Location
                                            </label>
                                            <input
                                                type="text"
                                                id="location"
                                                value={event.location}
                                                onChange={(e) =>
                                                    setEvent({
                                                        ...event,
                                                        location:
                                                            e.target.value,
                                                    })
                                                }
                                                className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-gray-300"
                                                required
                                            />
                                            {eventFormErrors.location && (
                                                <p className="mt-1 text-sm text-red-600">
                                                    {eventFormErrors.location}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="description"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Description
                                        </label>
                                        <textarea
                                            id="description"
                                            value={event.description}
                                            onChange={(e) =>
                                                setEvent({
                                                    ...event,
                                                    description: e.target.value,
                                                })
                                            }
                                            rows={4}
                                            className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-gray-300"
                                            required
                                        />
                                        {eventFormErrors.description && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {eventFormErrors.description}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="description"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            french Note
                                        </label>
                                        <textarea
                                            id="frenchNote"
                                            value={event.frenchNote}
                                            onChange={(e) =>
                                                setEvent({
                                                    ...event,
                                                    frenchNote: e.target.value,
                                                })
                                            }
                                            rows={4}
                                            className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-gray-300"
                                            required
                                        />
                                        {eventFormErrors.frenchNote && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {eventFormErrors.frenchNote}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="imageUrl"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Image URL
                                        </label>
                                        <input
                                            type="text"
                                            id="imageUrl"
                                            value={event.imageUrl}
                                            onChange={(e) =>
                                                setEvent({
                                                    ...event,
                                                    imageUrl: e.target.value,
                                                })
                                            }
                                            className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-gray-300"
                                            required
                                        />
                                        {eventFormErrors.imageUrl && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {eventFormErrors.imageUrl}
                                            </p>
                                        )}
                                    </div>

                                    <div className="flex justify-end space-x-4 pt-4">
                                        {eventEditingId && (
                                            <button
                                                type="button"
                                                onClick={cancelEventEdit}
                                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                                            >
                                                Cancel
                                            </button>
                                        )}
                                        <button
                                            type="submit"
                                            disabled={eventLoading}
                                            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 disabled:opacity-50"
                                        >
                                            {eventLoading
                                                ? "Saving..."
                                                : eventEditingId
                                                ? "Update Event"
                                                : "Add Event"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Events List */}
                        <div className="bg-white rounded-md shadow-sm">
                            <div className="p-6">
                                <div className="mb-6">
                                    <h3 className="text-base font-medium text-gray-800">
                                        Events List
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Manage your existing events below.
                                    </p>
                                </div>

                                {eventFetching ? (
                                    <div className="flex justify-center py-8">
                                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
                                    </div>
                                ) : events.length === 0 ? (
                                    <div className="text-center py-8 text-gray-500">
                                        <p>
                                            No events found. Create your first
                                            event above!
                                        </p>
                                    </div>
                                ) : (
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Event
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Date
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Location
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Actions
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {events.map((ev) => (
                                                    <tr
                                                        key={ev.id}
                                                        className="hover:bg-gray-50"
                                                    >
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="flex-shrink-0 h-10 w-10">
                                                                    <Image
                                                                        className="h-10 w-10 rounded-full object-cover"
                                                                        src={
                                                                            ev.imageUrl
                                                                        }
                                                                        alt={
                                                                            ev.title
                                                                        }
                                                                        width={
                                                                            40
                                                                        }
                                                                        height={
                                                                            40
                                                                        }
                                                                    />
                                                                </div>
                                                                <div className="ml-4">
                                                                    <div className="text-sm font-medium text-gray-900">
                                                                        {
                                                                            ev.title
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">
                                                                {new Date(
                                                                    ev.startDate
                                                                ).toLocaleDateString()}
                                                            </div>
                                                            <div className="text-sm text-gray-500">
                                                                to{" "}
                                                                {new Date(
                                                                    ev.endDate
                                                                ).toLocaleDateString()}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">
                                                                {ev.location}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                            <button
                                                                onClick={() =>
                                                                    handleEventEdit(
                                                                        ev
                                                                    )
                                                                }
                                                                className="text-indigo-600 hover:text-indigo-900 mr-4"
                                                            >
                                                                Edit
                                                            </button>
                                                            <button
                                                                onClick={() =>
                                                                    setShowEventDeleteConfirm(
                                                                        ev.id ||
                                                                            ""
                                                                    )
                                                                }
                                                                className="text-red-600 hover:text-red-900"
                                                            >
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* School Life content with similar styling */}
                {/* {activeTab === "school-life" && (
                        <div className="space-y-6">
                            ...
                        </div>
                    )} */}
            </div>

            {/* Delete Confirmation Modals */}
            {showEventDeleteConfirm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg p-6 max-w-sm w-full">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">
                            Confirm Delete
                        </h3>
                        <p className="text-sm text-gray-500 mb-6">
                            Are you sure you want to delete this event? This
                            action cannot be undone.
                        </p>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={() => setShowEventDeleteConfirm(null)}
                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() =>
                                    handleEventDelete(showEventDeleteConfirm)
                                }
                                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
