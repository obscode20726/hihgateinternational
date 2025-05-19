// app/about-us/page.tsx

import MultiImageCarousel from "@/components/MultiImageCarousel";
import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";
import Image from "next/image";

const Page = () => {
    return (
        <>
            <Navbar />
            <div className="text-gray-800 pt-32 bg-white">
                {/* Hero Section */}
                <div className="relative h-64 w-full">
                    <Image
                        src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/6623ad42330fd69fddd54ffe_IMG_8468.JPG"
                        alt="About us banner"
                        layout="fill"
                        objectFit="cover"
                        className="z-0"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h1 className="text-white text-4xl font-semibold">
                            About us
                        </h1>
                    </div>
                </div>

                {/* Main Content */}
                <div className="px-6 max-w-7xl mx-auto py-12 space-y-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-orange-600">
                        High Gate International Academy
                    </h2>
                    <p className="max-w-4xl mx-auto text-justify">
                        High Gate International Academy is a modern school in
                        Kigali – Rwanda, which works on its own campus built in
                        Gisozi. The school offers Daycare, Nursery and Primary
                        education in a nurturing and inclusive environment. Our
                        vision and mission is to offer high-quality education
                        with a Cambridge Curriculum mixed with the Canadian
                        Education system. Students at High Gate will develop
                        their full potential along with discipline in a
                        conducive, secure, clean and joyful environment. Our
                        blended curriculum will provide the students an
                        opportunity for openness, self-confidence and a
                        multilingual mindset as French and English will lead
                        without compromising on the local language.
                    </p>

                    {/* Mission & Vision */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700">
                                Mission
                            </h3>
                            <p className="text-gray-700">
                                High Gate International Academy creates
                                principled lifelong learners equipped with the
                                knowledge and skills to excel.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700">
                                Vision
                            </h3>
                            <p className="text-gray-700">
                                A High Gate student shall be an inquisitive and
                                knowledgeable thinker, concerned about others,
                                Rwanda and the environment.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700">
                                School Motto / Devise de l’école
                            </h3>
                            <p className="text-gray-700">
                                Inspiring Excellence, Embracing Diversity /
                                Inspirer l’excellence, Embrasser la diversité
                            </p>
                        </div>
                    </div>
                </div>

                {/* Videos */}
                <div className="space-y-12 px-6 md:px-20">
                    <div className="aspect-video w-full max-w-4xl mx-auto">
                        <iframe
                            src="https://www.youtube.com/embed/VIDEO_ID_1"
                            title="HGI Primary Section"
                            className="w-full h-full rounded-lg"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="aspect-video w-full max-w-4xl mx-auto">
                        <iframe
                            src="https://www.youtube.com/embed/VIDEO_ID_2"
                            title="Nursery Section"
                            className="w-full h-full rounded-lg"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Image Grid */}
                <MultiImageCarousel />
            </div>
            <Footer />
        </>
    );
};

export default Page;
