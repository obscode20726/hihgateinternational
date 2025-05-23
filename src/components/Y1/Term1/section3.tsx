"use client";

import Image from "next/image";
import { useLanguage } from "@/app/Context/LanguageContext";

const NewsletterSection3 = () => {
    const { language } = useLanguage();

    return (
        <div className="min-h-fit max-w-7xl mx-auto bg-white px-4 py-8 text-justify text-gray-800 font-lexend">
            {language === "en" ? (
                <>
                    <div className="bg-gray-100 text-center px-4 py-2 mb-8 rounded">
                        <h3 className="text-xl font-bold text-blue-900">
                            3. Preschool Insights
                        </h3>
                    </div>
                    <div className="flex flex-col gap-10">
                        {/* Left Column */}
                        <div className="w-full space-y-4">
                            <p className="mt-4">
                                In the Nursery section, we had a successful
                                integration of the Canadian educational system
                                with Quebec standards, laying a robust
                                foundation for our learners&apos; academic
                                excellence. This implementation ensures a
                                comprehensive and enriched educational
                                experience, aligning our curriculum with
                                rigorous standards. The commitment to these
                                standards not only fosters a strong academic
                                foundation but also cultivates a dynamic
                                learning environment, preparing our young minds
                                for future success. We look forward to
                                witnessing the continued growth and achievements
                                of our students as they navigate this
                                academically enriching journey.
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
                            <p>
                                The teachers have demonstrated commendable
                                adaptability, and swiftly embraced and
                                implemented these standards into their
                                pedagogical approach. This collaborative
                                endeavor, rooted in the play pedagogy, focuses
                                on the holistic development of a child across
                                five domains: Linguistic, Cognitive, Motor,
                                Social, and Affective. By embracing this
                                approach, we not only foster a robust academic
                                foundation but also nurture dynamic, responsive
                                learning environments that empower our Nursery
                                learners for academic excellence and personal
                                growth.
                            </p>
                        </div>
                        <div
                            id="w-node-_41b2c1a5-3404-9587-86ba-360871bf03ce-80af046b"
                            className="grid grid-flow-col flex-wrap min-w-full justify-around gap-4 mt-5 mb-3"
                        >
                            <Image
                                src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657dc758d5a68b2e6c7ebfe2_Star%201.png"
                                width={137}
                                height={137}
                                alt="picture"
                                loading="lazy"
                                className="min-w-full min-h-[70%] mb-[10px] mr-[10px]"
                            />

                            <Image
                                src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657dc758fe6a1b80f0182b38_Star%203.png"
                                width={137}
                                height={137}
                                alt="picture"
                                loading="lazy"
                                className=" min-w-full min-h-[70%] mb-[10px] mr-[10px]"
                            />
                        </div>
                        <div
                            id="w-node-_41b2c1a5-3404-9587-86ba-360871bf03ce-80af046b"
                            className="grid grid-flow-col flex-wrap min-w-full justify-around gap-4 mt-5 mb-3"
                        >
                            <Image
                                src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657dc7576276ea8bd157260d_Star%204.png"
                                width={137}
                                height={137}
                                alt="picture"
                                loading="lazy"
                                className=" min-w-full min-h-[70%] mb-[10px] mr-[10px]"
                            />

                            <Image
                                src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657dc759728c9a60884027a7_Star%206.png"
                                width={137}
                                height={137}
                                alt="picture"
                                loading="lazy"
                                className=" min-w-full min-h-[70%] mb-[10px] mr-[10px]"
                            />
                        </div>
                        <div
                            id="w-node-_41b2c1a5-3404-9587-86ba-360871bf03ce-80af046b"
                            className="grid grid-flow-col flex-wrap min-w-full justify-around gap-4 mt-5 mb-3"
                        >
                            <Image
                                src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657dc7576276ea8bd157260d_Star%204.png"
                                width={137}
                                height={137}
                                alt="picture"
                                loading="lazy"
                                className=" min-w-full min-h-[70%] mb-[10px] mr-[10px]"
                            />

                            <Image
                                src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657dc759728c9a60884027a7_Star%206.png"
                                width={137}
                                height={137}
                                alt="picture"
                                loading="lazy"
                                className=" min-w-full min-h-[70%] mb-[10px] mr-[10px]"
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

export default NewsletterSection3;
