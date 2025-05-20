import React from "react";
import Button from "../components/Button";
import { Download } from "lucide-react";

const CalendarSection = () => {
    const handleDownload = () => {
        window.open(
            "https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/66c30c9c97168df9cedeb9ae_High%20Gate%202024-2025_Calendar%20(3).pdf",
            "_blank"
        );
    };

    return (
        <>
            <section className="relative w-full overflow-hidden">
                {/* Background image with yellow-uniformed students */}
                <div
                    className="absolute inset-0 bg-[#f6f9ff] bg-cover bg-center mt-24 z-0"
                    style={{
                        backgroundImage:
                            "url('https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/6623ad42330fd69fddd54ffe_IMG_8468.JPG')",
                    }}
                />

                {/* Semi-transparent overlay for better text readability */}
                <div className="absolute inset-0 z-10"></div>

                {/* Content container */}
                <div className="relative z-20 container mx-auto px-4 pt-64 pb-16 md:pt-64 md:pb-40">
                    {/* Header */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                        School Calendar
                    </h2>
                </div>
            </section>

            {/* Content section - now outside the first section */}
            <section className="bg-white py-8">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto bg-white   p-6 md:p-8 -mt-6 relative z-30">
                        <p className="text-gray-800 text-sm md:text-base text-center mb-6">
                            The school calendar for the coming school year is
                            available for parents to download, giving them easy
                            access to key dates and events. This digital
                            calendar is available on the school website,
                            allowing parents to save, print and share it for
                            better planning and involvement in their
                            child&apos;s education. For any assistance, parents
                            can contact the school administration.
                        </p>

                        {/* Button container */}
                        <div className="flex justify-center">
                            <Button
                                onClick={handleDownload}
                                className="flex bg-amber-500 hover:bg-amber-600 text-white px-8 py-2 rounded-full font-medium"
                            >
                                <Download className="mr-2 h-4 w-4" />
                                Download
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CalendarSection;
