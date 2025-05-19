import React, { useState } from "react";
import Image from "next/image";
import { Event } from "@/app/types";

interface EventListProps {
    events: Event[];
    handleEventEdit: (eventToEdit: Event) => void;
    handleEventDelete: (id: string) => void;
    eventEditingId: string | null;
    eventFetching: boolean;
}

const EventList: React.FC<EventListProps> = ({
    events,
    handleEventEdit,
    handleEventDelete,
    eventEditingId,
    eventFetching,
}) => {
    const [eventNotification, setEventNotification] = useState<{
        type: string;
        message: string;
    } | null>(null);

    const handleDelete = async (id: string) => {
        try {
            await handleEventDelete(id);
            setEventNotification({
                type: "success",
                message: "Event deleted successfully!",
            });
        } catch (error) {
            console.log(error);
            setEventNotification({
                type: "error",
                message: "Failed to delete event.",
            });
        }
    };

    return (
        <div className="space-y-6">
            {eventNotification && eventNotification.type && (
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
                                No events found. Create your first event above!
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
                                            className={
                                                eventEditingId === ev.id
                                                    ? "bg-yellow-100"
                                                    : "hover:bg-gray-50"
                                            }
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <Image
                                                            className="h-10 w-10 rounded-full object-cover"
                                                            src={ev.imageUrl}
                                                            alt={ev.title}
                                                            width={40}
                                                            height={40}
                                                        />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {ev.title}
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
                                                        handleEventEdit(ev)
                                                    }
                                                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        if (ev.id) {
                                                            handleDelete(ev.id);
                                                        } else {
                                                            console.error(
                                                                "Event ID is undefined"
                                                            );
                                                        }
                                                    }}
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
    );
};

export default EventList;
