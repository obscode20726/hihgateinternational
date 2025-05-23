"use client";

import Image from "next/image";
import { useLanguage } from "@/app/Context/LanguageContext";

const NewsletterSection4_2 = () => {
    const { language } = useLanguage();

    return (
        <div className="min-h-fit max-w-7xl mx-auto bg-white px-4 py-8 text-justify text-gray-800 font-lexend">
            {language === "en" ? (
                <>
                    <div className="bg-gray-100 text-center px-4 py-2 mb-8 rounded">
                        <h3 className="text-xl font-bold text-blue-900">
                            4. Triumphs from Term one
                        </h3>
                    </div>
                    <div className="flex flex-col gap-10">
                        {/* Left Column */}
                        <div className="w-full space-y-4">
                            <p className="mt-4">
                                The school&apos;s unique approach includes
                                internal professional development sessions,
                                ensuring that its educators remain at the
                                forefront of modern teaching methodologies. As
                                the school endeavors to elevate education
                                standards in Rwanda and the broader region, it
                                stands poised to fulfill the long-awaited
                                aspirations of students eager for an institution
                                that seamlessly integrates the educational
                                benchmarks of Canada, the UK, and France, while
                                nurturing and celebrating the rich tapestry of
                                national cultures.
                            </p>
                            <p>
                                High Gate International Academy takes pride in
                                its teaching staff, featuring the exemplary
                                academic achievements of Mr. Christian and Mr.
                                Emmanuel Magerha, alongside specialists such as
                                Ms. Sandrine, Mr. Emma Abayisenga, Mr. Kevin,
                                Ms. Kajjo, Mr. Ntaganda Emmanuel, and Mr.
                                Philbert. With expertise ranging from early
                                childhood education to cooperative learning
                                strategies and IT integration, each member
                                contributes to the school&apos;s commitment to
                                excellence. Their diverse skills not only
                                reflect the institution&apos;s dedication to
                                continuous improvement but also enrich the
                                educational landscape with a variety of
                                perspectives and approaches.
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
                                src="	https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657dc758b1ac103f4cba3913_Star%202.png"
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
                                className="min-w-full min-h-[70%] mb-[10px] mr-[10px]"
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
                                className="min-w-full min-h-[70%] mb-[10px] mr-[10px]"
                            />
                            <Image
                                src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657dc759704ec3bbd15612b0_Star%205.png"
                                width={137}
                                height={137}
                                alt="picture"
                                loading="lazy"
                                className="min-w-full min-h-[70%] mb-[10px] mr-[10px]"
                            />
                            <Image
                                src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657dc759728c9a60884027a7_Star%206.png"
                                width={137}
                                height={137}
                                alt="picture"
                                loading="lazy"
                                className="min-w-full min-h-[70%] mb-[10px] mr-[10px]"
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

export default NewsletterSection4_2;
