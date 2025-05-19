"use client";

import Image from "next/image";
import { useLanguage } from "@/app/Context/LanguageContext";

const NewsletterSection4_1 = () => {
    const { language } = useLanguage();

    return (
        <div className="min-h-fit max-w-7xl mx-auto bg-white px-4 py-8 text-justify text-gray-800 font-sans">
            {language === "en" ? (
                <>
                    <div className="bg-gray-100 text-center px-4 py-2 mb-8 rounded">
                        <h3 className="text-xl font-bold text-blue-900">
                            4. Primary Highlights
                        </h3>
                    </div>
                    <div className="flex flex-col gap-10">
                        {/* Left Column */}
                        <div className="w-full space-y-4">
                            <p className="mt-4">
                                In their inaugural term at High Gate
                                International Academy, primary section students
                                embarked on an innovative integrated learning
                                program, harmonizing the renowned Cambridge
                                international Curriculum with a novel French
                                curriculum from France Education International.
                                This pioneering approach seeks to establish a
                                solid foundation for the Canadian education
                                system, particularly in the preschool phase
                                conducted entirely in French.
                            </p>
                            <p>
                                The school has strategically appointed
                                specialist teachers, Mr. Christian and Mr.
                                Emmanuel Magerha, who have successfully
                                completed their initial Masters courses at
                                Université Grenoble Alpes, a prestigious
                                institution consistently ranking among the top
                                100-250 universities globally. Their dedication
                                to ongoing education is exemplified by their
                                pursuit of a second Masters, reflecting the
                                commitment of High Gate International Academy to
                                providing students with an unparalleled
                                bilingual French-speaking environment.
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

export default NewsletterSection4_1;
