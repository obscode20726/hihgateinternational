"use client";

import LanguageToggle from "@/components/Y1/Term1/LanguageToggleT1";
import Image from "next/image";
import { useLanguage } from "@/app/Context/LanguageContext";

const NewsletterPage = () => {
    const { language } = useLanguage();

    return (
        <div className="min-h-screen max-w-7xl mx-auto bg-white px-4 py-8 text-justify text-gray-800 font-sans">
            <LanguageToggle />

            {language === "en" ? (
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Left Column */}
                    <div className="lg:w-1/2 space-y-4">
                        <h2 className="text-2xl font-bold mb-4 text-blue-900">
                            Inside this issue
                        </h2>
                        <Image
                            src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657cf3abe263ba3262b376b0_Group%207-p-500.png"
                            alt="Inside this issue"
                            className="w-full rounded mb-6"
                            width={500}
                            height={300}
                        />
                        <div className="bg-gray-100 text-center px-4 py-2 rounded">
                            <h3 className="text-xl font-bold text-blue-900">
                                1. Principal’s Message
                            </h3>
                        </div>
                        <p className="mt-4">
                            Dear High Gate International Academy Family,
                        </p>
                        <p>
                            As we bid farewell to the first term of the
                            2023–2024 academic year, I am filled with immense
                            pride and gratitude for the remarkable journey we
                            have embarked on together. The High Gate
                            International Academy community has experienced a
                            brilliant commencement, and I extend my heartfelt
                            thanks to each and every parent for their unwavering
                            support.
                        </p>
                        <p>
                            Our commitment to providing a unique and enriching
                            educational experience has come to life through our
                            blended Canadian and Cambridge education system. It
                            has been a joy to witness our students thrive in an
                            environment that celebrates their individual talents
                            while fostering teamwork.
                        </p>
                    </div>
                    {/* Right Column */}
                    <div className="lg:w-1/2 space-y-4">
                        <p>
                            I want to express my deepest appreciation to our
                            dedicated teachers for their quick adaptability to
                            new teaching models. Their efforts have paved the
                            way for our students to navigate a learning journey
                            that showcases powerful life skills, inspired and
                            developed by our exceptional educators.
                        </p>
                        <p>
                            As we embark on the second term, I am delighted to
                            inform you of some adjustments to students&apos;
                            timetables based on the valuable feedback we
                            received from parents. We understand the importance
                            of incorporating additional activities that reflect
                            cultural and moral values. Therefore, we have
                            introduced Traditional Dance and Values from the
                            Bible/Christianity into the curriculum.
                        </p>
                        <p>
                            Furthermore, we are excited to announce the
                            initiation of after-school activities for primary
                            students, scheduled from Monday to Thursday, 3:50 pm
                            to 4:30 pm. During this time, students will receive
                            30 minutes of homework support from teachers,
                            followed by 40 minutes of extracurricular activities
                            from 4:35 to 5:30 pm.
                        </p>
                        <p>
                            As we look forward to Term 2, which commences on
                            December 18th, 2023, and concludes on April 5th,
                            2024, I am confident that these enhancements will
                            contribute to the holistic development of our
                            students.
                        </p>
                        <p>
                            Thank you for being an integral part of the High
                            Gate International Academy family. Together, let us
                            continue to inspire and nurture the minds of our
                            future leaders.
                        </p>
                        <p className="mt-6">
                            Warm regards,
                            <br />
                            <strong>Mr. Michel Shamamba</strong>
                            <br />
                            Principal
                            <br />
                            High Gate International Academy
                        </p>
                    </div>
                </div>
            ) : (
                <div>
                    {/* French content placeholder */}
                    <div className="flex flex-col lg:flex-row gap-10">
                        {/* Left Column */}
                        <div className="lg:w-1/2 space-y-4">
                            <h2 className="text-2xl font-bold mb-4 text-blue-900">
                                NEWSLETTER DU PREMIER TRIMESTRE
                            </h2>
                            <Image
                                src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657cf3abe263ba3262b376b0_Group%207-p-500.png"
                                alt="Inside this issue"
                                className="w-full rounded mb-6"
                                width={500}
                                height={300}
                            />
                            <div className="bg-gray-100 text-center px-4 py-2 rounded">
                                <h3 className="text-xl font-bold text-blue-900">
                                    1. Message du directeur
                                </h3>
                            </div>
                            <p className="mt-4">
                                Chers Parents de la famille High Gate
                                international Academy,
                            </p>
                            <p>
                                En clôturant ce premier trimestre de
                                l&apos;année académique 2023-2024, je suis
                                rempli d&apos;une immense fierté et de gratitude
                                pour le remarquable voyage que nous avons
                                entrepris ensemble. La communauté High Gate
                                International Academy a connu un début brillant
                                en cette première année académique, et
                                j&apos;exprime mes plus sincères remerciements à
                                chaque parent pour son soutien indéfectible.
                            </p>
                            <p>
                                Notre engagement à fournir une expérience
                                éducative unique et enrichissante s&apos;est
                                concrétisé à travers notre système éducatif
                                canadien et de Cambridge. Cela a été une joie de
                                voir nos élèves s&apos;épanouir dans un
                                environnement qui célèbre leurs talents
                                individuels tout en favorisant le travail
                                d&apos;équipe. Cette plateforme éducative
                                spéciale façonne chaque enfant non seulement en
                                tant qu&apos;individu, mais aussi en tant que
                                contributeur précieux à la grande équipe.
                            </p>
                        </div>
                        {/* Right Column */}
                        <div className="lg:w-1/2 space-y-4">
                            <p>
                                I want to express my deepest appreciation to our
                                dedicated teachers for their quick adaptability
                                to new teaching models. Their efforts have paved
                                the way for our students to navigate a learning
                                journey that showcases powerful life skills,
                                inspired and developed by our exceptional
                                educators.
                            </p>
                            <p>
                                As we embark on the second term, I am delighted
                                to inform you of some adjustments to
                                students&apos; timetables based on the valuable
                                feedback we received from parents. We understand
                                the importance of incorporating additional
                                activities that reflect cultural and moral
                                values. Therefore, we have introduced
                                Traditional Dance and Values from the
                                Bible/Christianity into the curriculum.
                            </p>
                            <p>
                                Furthermore, we are excited to announce the
                                initiation of after-school activities for
                                primary students, scheduled from Monday to
                                Thursday, 3:50 pm to 4:30 pm. During this time,
                                students will receive 30 minutes of homework
                                support from teachers, followed by 40 minutes of
                                extracurricular activities from 4:35 to 5:30 pm.
                            </p>
                            <p>
                                As we look forward to Term 2, which commences on
                                December 18th, 2023, and concludes on April 5th,
                                2024, I am confident that these enhancements
                                will contribute to the holistic development of
                                our students.
                            </p>
                            <p>
                                Thank you for being an integral part of the High
                                Gate International Academy family. Together, let
                                us continue to inspire and nurture the minds of
                                our future leaders.
                            </p>
                            <p className="mt-6">
                                Warm regards,
                                <br />
                                <strong>Mr. Michel Shamamba</strong>
                                <br />
                                Principal
                                <br />
                                High Gate International Academy
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewsletterPage;
