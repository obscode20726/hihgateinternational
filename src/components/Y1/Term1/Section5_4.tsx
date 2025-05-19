"use client";

import Image from "next/image";
import { useLanguage } from "@/app/Context/LanguageContext";

const NewsletterSection5_4 = () => {
    const { language } = useLanguage();

    return (
        <div className="max-w-7xl mx-auto bg-white px-4 py-8 text-justify text-gray-800 font-sans">
            {language === "en" ? (
                <>
                    <div className="bg-gray-100 text-center px-4 py-2 mb-8 rounded">
                        <h3 className="text-xl font-bold text-blue-900">
                            5.4 Intervention lessons
                        </h3>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-10">
                        {/* Left Column */}
                        <div className="lg:w-1/2 space-y-4">
                            <Image
                                src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657de48ea1a7cc3479bc5cb9_Rectangle%2016-p-800.png"
                                width={500}
                                height={600}
                                sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 90vw, (max-width: 1439px) 45vw, 628px"
                                alt="picture"
                                className="w-full h-full"
                            />
                        </div>
                        {/* Right Column */}

                        <div className="content-center lg:w-1/2 space-y-4">
                            <p>
                                After the diagnostic test which was done in the
                                3rd week of this term, we identified the
                                learning needs of the learners, and we devised
                                the intervention program for those who needed it
                                most.
                            </p>
                            <p>
                                The intervention had an objective to give extra
                                support after classes and has lasted up to the
                                revision week. The evaluation proved that the
                                learners who were in the program improved
                                significantly in class participation and general
                                performance.
                            </p>
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

export default NewsletterSection5_4;
