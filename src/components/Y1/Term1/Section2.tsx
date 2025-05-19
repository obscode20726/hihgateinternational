"use client";

import Image from "next/image";
import { useLanguage } from "@/app/Context/LanguageContext";

const NewsletterSection2 = () => {
    const { language } = useLanguage();

    return (
        <div className="max-w-7xl mx-auto bg-white px-4 py-8 text-justify text-gray-800 font-sans">
            {language === "en" ? (
                <>
                    <div className="bg-gray-100 text-center px-4 py-2 mb-8 rounded">
                        <h3 className="text-xl font-bold text-blue-900">
                            2. The Head of Academics’ Note
                        </h3>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-10">
                        {/* Left Column */}
                        <div className="lg:w-1/2 space-y-4">
                            <Image
                                src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657d00ac8cef2987ff37e667_Rectangle%2014.png"
                                alt="Inside this issue"
                                className="w-1/5 rounded-[10px] mb-6"
                                width={78}
                                height={78}
                            />

                            <p className="mt-4">Dear High Gate Community,</p>
                            <p>
                                As we conclude the first term, I am thrilled to
                                celebrate the academic achievements of our
                                students. They began the term with enthusiasm,
                                adapting seamlessly to new challenges.
                                Throughout these weeks, we witnessed remarkable
                                growth, resilience, and determination in both
                                studies and personal development.
                            </p>
                            <p>
                                My heartfelt thanks to our dedicated teachers
                                for fostering a stimulating learning
                                environment. Looking ahead, let us carry this
                                momentum into the next term, building on our
                                successes. Together, we can continue cultivating
                                a culture of academic excellence. Wishing
                                everyone a merry festive season and restful
                                break.
                            </p>
                            <p className="mt-6">
                                Best regards,
                                <br />
                                Mr. Joseph NTWARI
                                <br />
                                Head of Academics
                                <br />
                                High Gate International Academy
                            </p>
                        </div>
                        {/* Right Column */}
                        <div className="lg:w-1/2 space-y-4">
                            <Image
                                src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657d6369bcb648163f9e5bf7_Rectangle%2016-p-800.png"
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

export default NewsletterSection2;
