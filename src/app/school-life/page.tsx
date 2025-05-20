"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

gsap.registerPlugin(ScrollTrigger);

interface SchoolLifeEntry {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

export default function SchoolLifePage() {
    const [entries, setEntries] = useState<SchoolLifeEntry[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const cardsRef = useRef<HTMLDivElement[]>([]);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchEntries = async () => {
            try {
                setLoading(true);
                const response = await fetch("/api/school-life");
                if (!response.ok)
                    throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();
                if (Array.isArray(data)) setEntries(data);
                else setError("Failed to load school life entries.");
            } catch (err) {
                setError(
                    err instanceof Error
                        ? err.message
                        : "An unknown error occurred"
                );
            } finally {
                setLoading(false);
            }
        };

        fetchEntries();
    }, []);

    useEffect(() => {
        if (entries.length > 0) {
            // Animate heading and paragraph
            gsap.from(headerRef.current, {
                opacity: 0,
                y: 30,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reset",
                },
            });

            // Animate each card
            cardsRef.current.forEach((card, index) => {
                gsap.from(card, {
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                    ease: "power3.out",
                    delay: index * 0.1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reset",
                    },
                });
            });
        }
    }, [entries]);

    return (
        <>
            <Navbar />
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div ref={headerRef}>
                        <h1 className="text-4xl font-bold text-start text-gray-800 mb-4">
                            School Life
                        </h1>
                        <p className="text-start text-gray-600 mb-12 max-w-7xl mx-auto">
                            Explore the vibrant and dynamic school life at
                            Highgate, filled with diverse academic and
                            extracurricular activities that foster growth,
                            learning, and community spirit.
                        </p>
                    </div>

                    {loading && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[...Array(6)].map((_, i) => (
                                <div
                                    key={i}
                                    className="animate-pulse space-y-4"
                                >
                                    <div className="h-80 bg-gray-300 rounded-lg"></div>
                                    <div className="space-y-2">
                                        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                                        <div className="h-3 bg-gray-300 rounded w-full"></div>
                                        <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {error && (
                        <div className="text-center py-8 text-red-600">
                            <p>Error loading school life entries: {error}</p>
                        </div>
                    )}

                    {!loading && !error && entries.length === 0 && (
                        <div className="text-center py-8 text-gray-500">
                            <p>
                                No school life entries available at the moment.
                            </p>
                        </div>
                    )}

                    {!loading && !error && entries.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {entries.map((entry, i) => (
                                <div
                                    key={entry.id}
                                    ref={(el) => {
                                        if (el) cardsRef.current[i] = el;
                                    }}
                                    className="group overflow-hidden flex flex-col bg-white rounded-lg shadow-lg"
                                >
                                    <div className="relative h-80 w-full">
                                        <Image
                                            src={entry.imageUrl}
                                            alt={entry.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-semibold font-sans text-gray-900 mb-2">
                                            {entry.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-3 text-sm flex-grow">
                                            {entry.description}
                                        </p>
                                        <Link
                                            href={entry.link || "#"}
                                            className="text-indigo-600 hover:text-indigo-800 font-medium text-sm self-start"
                                            target={
                                                entry.link?.startsWith("http")
                                                    ? "_blank"
                                                    : "_self"
                                            }
                                            rel={
                                                entry.link?.startsWith("http")
                                                    ? "noopener noreferrer"
                                                    : ""
                                            }
                                        >
                                            View{" "}
                                            <span aria-hidden="true">
                                                &rarr;
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
            <Footer />
        </>
    );
}
