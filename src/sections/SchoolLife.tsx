"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SchoolLifeEntry {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

export default function SchoolLife() {
    const [entries, setEntries] = useState<SchoolLifeEntry[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const cardsRef = useRef<HTMLDivElement[]>([]);
    const headerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLAnchorElement>(null);

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
                    delay: index * 0.2,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reset",
                    },
                });
            });

            // Animate CTA button
            if (buttonRef.current) {
                gsap.from(buttonRef.current, {
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.6,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: buttonRef.current,
                        start: "top 90%",
                        toggleActions: "play none none reset",
                    },
                });
            }
        }
    }, [entries]);

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div ref={headerRef}>
                    <h2 className="text-4xl font-bold text-start text-gray-800 mb-4">
                        School Life
                    </h2>
                    <p className="text-start text-gray-600 mb-12 max-w-7xl mx-auto">
                        School life at Highgate is vibrant and dynamic, filled
                        with diverse academic and extracurricular activities
                        that foster growth, learning, and community spirit.
                    </p>
                </div>

                {loading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="animate-pulse space-y-4">
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
                        <p>No school life entries available at the moment.</p>
                    </div>
                )}

                {!loading && !error && entries.length > 0 && (
                    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {entries.slice(0, 4).map((entry, i) => (
                                    <div
                                        key={entry.id}
                                        ref={(el) => {
                                            if (el) cardsRef.current[i] = el;
                                        }}
                                        className="group overflow-hidden flex flex-col"
                                    >
                                        <div className="relative h-80 w-full rounded-lg mb-4">
                                            <Image
                                                src={entry.imageUrl}
                                                alt={entry.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </div>
                                        <div className="py-6 flex flex-col flex-grow">
                                            <h3 className="text-xl font-semibold font-sans text-gray-900 mb-2">
                                                {entry.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4 line-clamp-2 text-sm flex-grow">
                                                {entry.description}
                                            </p>
                                            <Link
                                                href={entry.link || "#"}
                                                className="text-indigo-600 hover:text-indigo-800 font-medium text-sm self-start"
                                                target={
                                                    entry.link?.startsWith(
                                                        "http"
                                                    )
                                                        ? "_blank"
                                                        : "_self"
                                                }
                                                rel={
                                                    entry.link?.startsWith(
                                                        "http"
                                                    )
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

                            <div className="text-center mt-12">
                                <Link
                                    ref={buttonRef}
                                    href="/school-life"
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition duration-300"
                                >
                                    View all
                                </Link>
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </section>
    );
}
