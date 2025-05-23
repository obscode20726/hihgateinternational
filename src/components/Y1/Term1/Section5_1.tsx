"use client";

import Image from "next/image";
import { useLanguage } from "@/app/Context/LanguageContext";

const NewsletterSection5_1 = () => {
    const { language } = useLanguage();

    return (
        <div className="max-w-7xl mx-auto bg-white px-4 py-8 text-justify text-[#024059] font-lexend">
            {language === "en" ? (
                <>
                    <div className="bg-gray-50 text-center px-4 py-2 mb-8 rounded">
                        <h3 className="text-xl font-bold text-[#01254e]">
                            5.1 Partnerships and curricula
                        </h3>
                    </div>
                    <div className="space-y-4 py-2">
                        <p className="mt-4">
                            High Gate International Academy boasts a unique
                            approach to education by cultivating partnerships
                            with renowned curriculum providers. The school
                            harmoniously integrates the Cambridge International
                            curriculum from the UK and the Canadian Education
                            system, creating a balanced 50/50 learning
                            environment.
                        </p>
                        <p>
                            This distinctive blend ensures that students develop
                            a robust command of both English and French by the
                            conclusion of their primary school journey. In the
                            preschool program, adherence to Canadian teaching
                            standards is observed, with French serving as the
                            exclusive instructional language.
                        </p>
                        <p>
                            Emphasizing play-based learning, this early
                            education strategy focuses on fostering fine motor
                            skills, affective development, and cognitive
                            abilities, equipping students with the essential
                            21st-century skills demanded by the contemporary
                            labor market.
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
                                className="w-full h-full"
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
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                    <div className="space-y-4 py-2">
                        <p className="mt-4">
                            Beginning in grade one, the Cambridge curriculum
                            takes root at High Gate International Academy,
                            extending seamlessly across all primary grade
                            levels. The school distinguishes itself by offering
                            three international certifications in Mathematics,
                            Science, and English within this framework.
                        </p>
                        <p>
                            Notably, the remaining subjects taught during the
                            primary years are conducted in French, contributing
                            to the establishment of a bilingual education
                            system. Through this approach, the academy ensures a
                            holistic educational experience, with a strategic
                            emphasis on language proficiency, international
                            certifications, and the development of well-rounded
                            skills that are pivotal for success in the 21st
                            century.
                        </p>
                        <p>
                            High Gate International Academy in Rwanda pioneers a
                            unique blend of the Cambridge curriculum, incubating
                            learners alongside Canadian students. This
                            innovative approach fosters cultural exchange,
                            ensuring exposure to high educational standards and
                            positioning the school at the forefront of global
                            academic excellence. The distinctive model offers
                            students a rich and comprehensive learning
                            experience, creating a globally relevant educational
                            journey.
                        </p>
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

export default NewsletterSection5_1;
