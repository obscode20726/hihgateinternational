"use client";

import Image from "next/image";
import { useLanguage } from "@/app/Context/LanguageContext";

const NewsletterSection5_2 = () => {
    const { language } = useLanguage();

    return (
        <div className="max-w-7xl mx-auto bg-white px-4 py-8 text-justify text-gray-800 font-sans">
            {language === "en" ? (
                <>
                    <div className="bg-gray-100 text-center px-4 py-2 mb-8 rounded">
                        <h3 className="text-xl font-bold text-blue-900">
                            5.2 Open House
                        </h3>
                    </div>
                    <div className="space-y-4 py-2">
                        <p className="mt-4">
                            On September 1st, 2023, High Gate International
                            Academy hosted an Open House, welcoming parents,
                            students, neighbors, teachers, officials, and the
                            wider school community.
                        </p>
                        <p>
                            Attendees had the opportunity to explore the
                            school’s facilities, including classrooms,
                            laboratories, and sports amenities. The event
                            featured entertainment by artists, coverage by
                            national media journalists, and engaging
                            team-building games. Culminating in a communal meal,
                            the occasion showcased the school&apos;s commitment
                            to excellence.
                        </p>
                        <p>
                            The event generated considerable enthusiasm among
                            parents, resulting in the registration of a
                            significant number of new students, amounting to 40%
                            of the current student body at High Gate
                            International Academy.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row mt-4 gap-10">
                        {/* Left Column */}
                        <div className="lg:w-1/2 space-y-4">
                            <Image
                                src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657d6369bcb648163f9e5bf7_Rectangle%2016-p-800.png"
                                width={500}
                                height={600}
                                sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 90vw, (max-width: 1439px) 45vw, 628px"
                                alt="picture"
                                className="w-full"
                            />
                            <Image
                                src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657d6369bcb648163f9e5bf7_Rectangle%2016-p-800.png"
                                width={500}
                                height={600}
                                sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 90vw, (max-width: 1439px) 45vw, 628px"
                                alt="picture"
                                className="w-full"
                            />
                        </div>
                        {/* Right Column */}
                        <div className="lg:w-1/2 space-y-4">
                            <Image
                                src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657d6369bcb648163f9e5bf7_Rectangle%2016-p-800.png"
                                width={500}
                                height={600}
                                sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 90vw, (max-width: 1439px) 45vw, 628px"
                                alt="picture"
                                className="w-full"
                            />
                            <Image
                                src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657d6369bcb648163f9e5bf7_Rectangle%2016-p-800.png"
                                width={500}
                                height={600}
                                sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 90vw, (max-width: 1439px) 45vw, 628px"
                                alt="picture"
                                className="w-full"
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

export default NewsletterSection5_2;
