"use client";

import Image from "next/image";
import { useLanguage } from "@/app/Context/LanguageContext";

const NewsletterSection5_3 = () => {
    const { language } = useLanguage();

    return (
        <div className="max-w-7xl mx-auto bg-white px-4 py-8 text-justify text-[#024059] font-lexend">
            {language === "en" ? (
                <>
                    <div className="bg-gray-50 text-center px-4 py-2 mb-8 rounded">
                        <h3 className="text-xl font-bold text-[#01254e]">
                            5.3 Soirée du Programme d&apos;Études
                        </h3>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-10">
                        {/* Left Column */}
                        <div className="content-center lg:w-1/2 space-y-4">
                            <p>
                                The Curriculum Evening held at High Gate
                                International Academy was a dedicated event
                                designed to acquaint parents with the
                                school&apos;s comprehensive curriculum. The
                                presentation covered various sections, subjects,
                                and methodologies employed in teaching students.
                                Emphasis was placed on the school&apos;s
                                philosophy of teaching and learning.
                            </p>
                            <p>
                                Parents actively engaged in discussions, seeking
                                clarification on lesson structures, homework
                                schedules, future plans, and fostering
                                collaboration between the school and families.
                                The event underscored the importance of a
                                collective effort between teachers and parents
                                to support students; learning processes and
                                facilitate a smooth transition into the new
                                educational environment, ensuring excellence in
                                academic pursuits.
                            </p>
                        </div>
                        {/* Right Column */}
                        <div className="lg:w-1/2 space-y-4">
                            <Image
                                src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657de1db8d8a314907e15e4b_Rectangle%2016-p-800.png"
                                width={500}
                                height={600}
                                sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 90vw, (max-width: 1439px) 45vw, 628px"
                                alt="picture"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </>
            ) : (
                <div>
                    {/* French content placeholder */}
                    <p className="text-gray-500">
                        French version coming soon...
                    </p>
                </div>
            )}
        </div>
    );
};

export default NewsletterSection5_3;
