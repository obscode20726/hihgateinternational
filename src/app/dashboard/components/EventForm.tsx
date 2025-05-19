import React from "react";

interface Event {
    title: string;
    startDate: string;
    endDate: string;
    description: string;
    location: string;
    imageUrl: string;
    frenchNote: string;
}

interface EventFormProps {
    event: Event;
    setEvent: React.Dispatch<React.SetStateAction<Event>>;
    handleEventSubmit: (e: React.FormEvent) => Promise<void>;
    eventFormErrors: Record<string, string>;
    eventEditingId: string | null;
    eventLoading: boolean;
    cancelEventEdit: () => void;
}

const EventForm: React.FC<EventFormProps> = ({
    event,
    setEvent,
    handleEventSubmit,
    eventFormErrors,
    eventEditingId,
    eventLoading,
    cancelEventEdit,
}) => {
    return (
        <div className="bg-white rounded-md shadow-sm">
            <div className="p-6">
                <div className="mb-6">
                    <h3 className="text-base font-medium text-gray-800">
                        {eventEditingId ? "Edit Event" : "Add New Event"}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                        Fill in the fields below to{" "}
                        {eventEditingId ? "update the" : "create a new"} event.
                    </p>
                </div>

                <form onSubmit={handleEventSubmit} className="space-y-6">
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
                                value={event.startDate.split("T")[0]}
                                onChange={(e) =>
                                    setEvent({
                                        ...event,
                                        startDate: e.target.value,
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
                                value={event.endDate.split("T")[0]}
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
                                        location: e.target.value,
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
    );
};

export default EventForm;
