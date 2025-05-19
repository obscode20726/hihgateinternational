"use client";

import { useEffect, useRef, useState } from "react";
import NextEventsSkeletonLoader from "@/components/NextEventsSkeletonLoader";
import EventCard from "@/components/EventCard";
import { motion, useInView } from "framer-motion";

interface Event {
    id: string;
    title: string;
    startDate: string;
    endDate: string;
    description: string;
    location: string;
    imageUrl: string;
    frenchNote: string;
}

export default function NextEvents() {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch("/api/events");
                if (!response.ok) {
                    let errorBody = "Unknown error";
                    try {
                        errorBody = await response.text();
                    } catch {}
                    throw new Error(
                        `HTTP error! status: ${response.status}, message: ${errorBody}`
                    );
                }
                const data = await response.json();
                if (Array.isArray(data)) {
                    const sortedEvents = data.sort(
                        (a, b) =>
                            new Date(b.startDate).getTime() -
                            new Date(a.startDate).getTime()
                    );
                    setEvents(sortedEvents);
                } else {
                    setError("Invalid data format received from server");
                    setEvents([]);
                }
            } catch (error) {
                setError(
                    error instanceof Error ? error.message : "Unknown error"
                );
                setEvents([]);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const renderHeader = () => (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12"
        >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Stay tuned for our upcoming events, featuring guest speakers,
                workshops, sports games, and performances. Join us in promoting
                learning, creativity, and community involvement. Check our
                website or office for the latest information. See you there!
            </p>
        </motion.div>
    );

    if (loading) return <NextEventsSkeletonLoader />;

    if (error) {
        return (
            <section className="py-16 bg-[#f6f9ff]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {renderHeader()}
                    <div className="min-h-[300px] flex items-center justify-center bg-red-50 p-6 rounded-lg">
                        <p className="text-red-700 text-center">
                            Error loading events: {error}
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 bg-[#f6f9ff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {renderHeader()}

                {events.length > 0 ? (
                    <div className="space-y-8">
                        {events.map((event) => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-600 py-10 bg-gray-50 rounded-lg shadow-md">
                        <p>No upcoming events scheduled at the moment.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
