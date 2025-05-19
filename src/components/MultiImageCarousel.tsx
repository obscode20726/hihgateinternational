"use client";

import { useState } from "react";

const images = [
    "https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/65154f383b8c74d25b869305_IMG-20230721-WA0011-p-500.jpg",
    "https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/651559e2b54df11b976d81f7_IMG_0259-p-500.jpg",
    "https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/6538eab3cd98af5faa87d45e_IMG_0262-p-500.jpg",
    "https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/65155b6ff9c7ca2bffa7bd57_IMG_0267-p-500.jpg",
    "https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/65155dcbb5e4ce1a2cb4e507_IMG_0270-p-500.jpg",
    "https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/65155ebb8831f423169a026d_IMG_0273-p-500.jpg",
];

const itemsPerSlide = 3;

export default function MultiImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const maxIndex = Math.ceil(images.length / itemsPerSlide) - 1;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    };

    const visibleImages = images.slice(
        currentIndex * itemsPerSlide,
        currentIndex * itemsPerSlide + itemsPerSlide
    );

    return (
        <div className="relative w-full max-w-5xl mx-auto mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {visibleImages.map((src, idx) => (
                    <img
                        key={idx}
                        src={src}
                        alt={`Slide ${currentIndex}-${idx}`}
                        className="w-full h-64 object-cover rounded-md"
                    />
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
            >
                ←
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
            >
                →
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-4 space-x-2">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                    <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                            i === currentIndex ? "bg-gray-800" : "bg-gray-400"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
