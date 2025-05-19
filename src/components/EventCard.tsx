"use client";

import Image from "next/image";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useInView,
} from "framer-motion";
import { Facebook, Instagram } from "lucide-react";

import { useRef } from "react";

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

export default function EventCard({ event }: { event: Event }) {
    const cardRef = useRef(null);

    // Track scroll progress for the specific card
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"],
    });
    const contentRef = useRef(null);
    const isInView = useInView(contentRef, { once: false, margin: "-100px" });

    // Create a parallax range: image moves slightly as user scrolls
    const y = useTransform(scrollYProgress, [0, 1], ["-20px", "20px"]);
    const ySmooth = useSpring(y, { stiffness: 100, damping: 20 });

    return (
        <motion.div
            ref={cardRef}
            whileHover={{ scale: 1.07, rotate: 0.3 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="group relative flex flex-col md:flex-row lg:h-[28rem] items-stretch bg-white rounded-2xl shadow-md overflow-hidden max-w-5xl mx-auto border border-transparent hover:border-gradient-to-r from-pink-500 to-yellow-500 duration-300"
        >
            {/* Gradient border pulse */}
            <div className="absolute inset-0 z-0 rounded-2xl border-2 border-transparent group-hover:border-pink-400 group-hover:animate-pulse pointer-events-none" />

            {/* Parallax image */}
            <motion.div
                style={{ y: ySmooth }}
                className="relative md:w-[40%] w-full overflow-hidden"
            >
                <div className="relative h-full min-h-[280px]">
                    <Image
                        src={event.imageUrl}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-[1deg]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
                <div className="absolute top-4 left-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded shadow z-10">
                    {new Date(event.startDate).toLocaleDateString("en-US", {
                        day: "2-digit",
                    })}{" "}
                    –{" "}
                    {new Date(event.endDate).toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "short",
                    })}
                </div>
            </motion.div>

            {/* Content */}
            <motion.div
                ref={contentRef}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="p-6 flex flex-col justify-between md:w-[60%] z-10 bg-white"
            >
                <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
                        {event.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                        {new Date(event.startDate).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                        })}{" "}
                        to{" "}
                        {new Date(event.endDate).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                        })}
                    </p>
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                        {event.description}
                    </p>
                    {event.frenchNote && (
                        <div className="bg-gray-100 p-3 rounded text-sm italic text-gray-600 mb-4">
                            {event.frenchNote}
                        </div>
                    )}
                </div>
                <div className="flex justify-between items-center mt-4">
                    <div className="flex gap-3 mt-2 justify-end">
                        <motion.a
                            whileHover={{ y: -3 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            href="#"
                            aria-label="Facebook"
                        >
                            <Facebook className="fab fa-facebook-f text-gray-600 hover:text-blue-600 text-lg"></Facebook>
                        </motion.a>
                        <motion.a
                            whileHover={{ y: -3 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            href="#"
                            aria-label="Instagram"
                        >
                            <Instagram className="fab fa-instagram text-gray-600 hover:text-pink-500 text-lg"></Instagram>
                        </motion.a>
                    </div>
                    <div className="text-right text-xs text-gray-500">
                        <p>More info: 078 89 80 340</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
