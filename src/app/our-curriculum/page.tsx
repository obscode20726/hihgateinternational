"use client";
import { useState } from "react";
import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";
import CanadianEducationSection from "@/components/CanadianEducationSection";
import CambridgeEducationSection from "@/components/CambridgeEducationSection";

const Page = () => {
    const [activeTab, setActiveTab] = useState<"canadian" | "cambridge">(
        "canadian"
    );

    return (
        <>
            <Navbar />
            <section className="bg-white pt-32">
                {/* Hero Section */}
                <section className="relative w-full overflow-hidden">
                    <div
                        className="absolute inset-0 bg-[#f6f9ff] bg-cover bg-center z-0"
                        style={{
                            backgroundImage:
                                "url('https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/6623ad42330fd69fddd54ffe_IMG_8468.JPG')",
                        }}
                    />
                    <div className="absolute inset-0 z-10"></div>
                    <div className="relative z-20 container mx-auto px-4 pt-64 pb-16 md:pt-24 md:pb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                            School Fees Structure
                        </h2>
                    </div>
                </section>

                {/* Tab Selector */}
                <div className="flex flex-col items-start max-w-7xl mx-auto lg:flex-row pl-6  mt-6 mb-6">
                    <button
                        className={`inline-block px-11 py-3 border-b border-gray-200 mt-5 mb-1 text-sm font-semibold ${
                            activeTab === "canadian"
                                ? "text-orange-500 border-b-2 border-orange-500"
                                : "text-gray-600"
                        }`}
                        onClick={() => setActiveTab("canadian")}
                    >
                        Canadian Education System
                    </button>
                    <button
                        className={`inline-block px-4 py-3 border-b border-gray-200 mt-5 mb-1 text-sm font-semibold ${
                            activeTab === "cambridge"
                                ? "text-orange-500 border-b-2 border-orange-500"
                                : "text-gray-600"
                        }`}
                        onClick={() => setActiveTab("cambridge")}
                    >
                        Cambridge Assessment International Education
                    </button>
                </div>

                {/* Content Sections */}
                {activeTab === "canadian" ? (
                    <CanadianEducationSection />
                ) : (
                    <CambridgeEducationSection />
                )}
            </section>

            <Footer />
        </>
    );
};

export default Page;
