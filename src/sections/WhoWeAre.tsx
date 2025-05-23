"use client";
import ytplaceholder from "@/assets/images/youtube-placeholder.svg";
import Button from "../components/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { useState } from "react";

export default function WhoWeAre() {
    const features = [
        {
            title: "Quality Education",
            description:
                "We believe that education is the foundation for success in life, and we are committed to providing our students with a high-quality education that will prepare them for the future.",
        },
        {
            title: "Inclusive Community",
            description:
                "At our school, we value diversity and inclusivity. We believe that every student deserves to feel safe and supported in their learning environment, regardless of their background or abilities.",
        },
        {
            title: "Academic Excellence",
            description:
                "We strive for excellence in education, investing in the latest technology and resources to enhance teaching and learning practices. We are dedicated to innovation and constantly seek ways to better serve our students.",
        },
    ];

    const [isPlaying, setIsPlaying] = useState(false);

    const fadeInUp = {
        hidden: { opacity: 0, y: 100, scale: 0.8 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
    };

    return (
        <section className="bg-white mt-36 pt-16">
            <div className="justify-between py-16">
                <div className="px-5 md:px-12 justify-center">
                    <div className="mx-auto justify-between self-center w-full max-w-7xl">
                        <div className="w-layout-grid lynx-grid-image-right">
                            <motion.div
                                className="pl-[5%] pr-[5%] md:pl-[15%]"
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <h2 className="text-center lg:text-left text-[29px] md:text-[34px] lg:text-[46px] text-[#cc7f00] font-lexend leading-[120%] mt-0 mb-9 font-bold max-w-[540px] md:max-w-[740px]">
                                    Who we are
                                </h2>
                                <p className="text-center lg:text-left text-[16px] sm:text-[18px] text-slate-800 font-varela leading-[165%] max-w-[820px] mb-3">
                                    High Gate International Academy is a modern
                                    school located in Kigali, Rwanda. The school
                                    offers daycare, nursery and primary
                                    education in a nurturing and inclusive
                                    environment.
                                </p>
                                <p className="text-[14px] lg:text-[16px] font-verdana text-center lg:text-left text-[#024059] my-0 font-normal">
                                    Your children will have access to:
                                </p>

                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: false, amount: 0.3 }}
                                    >
                                        <h1 className="text-[#cc7f00] text-center lg:text-left mt-[10px] font-arial leading-[44px] mb-0 text-[20px] font-bold">
                                            {feature.title}
                                        </h1>
                                        <p className="text-center lg:text-left text-[14px] lg:text-[16px] text-[#024059] font-verdana leading-5 my-0 font-normal">
                                            {feature.description}
                                        </p>
                                        {index === features.length - 1 && (
                                            <Button
                                                href="/about-us"
                                                className="mt-8"
                                            >
                                                Learn more
                                            </Button>
                                        )}
                                    </motion.div>
                                ))}
                            </motion.div>

                            <motion.div
                                className="flex flex-row relative justify-center items-stretch"
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <Image
                                    src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/672cad193c4cf22f51c8618a_cat%201%20(1200%20x%201350%20px).jpg"
                                    alt="School image"
                                    loading="eager"
                                    width={1200}
                                    height={1350}
                                    className="animate-float bottom-[-25px] left-[20px] md:bottom-[-25px] md:left-[-1px] lg:bottom-[-25px] lg:left-[-20px] max-w-[40%] absolute z-10 object-cover rounded-[30px] lg:max-w-[56%] shadow-[0_60px_60px_-15px_#1f20221a]"
                                />
                                <Image
                                    src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/668d5fa1c0a504eed33ec594_8.jpg"
                                    alt="School image"
                                    loading="eager"
                                    width={1200}
                                    height={800}
                                    className="object-cover max-w-full rounded-[30px] align-middle"
                                />
                            </motion.div>
                        </div>
                        <motion.div
                            className="relative w-full aspect-video mt-10 rounded-xl overflow-hidden group min-h-[200px]"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            {/* Background placeholder */}
                            {!isPlaying && (
                                <div
                                    className="absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-300"
                                    style={{
                                        backgroundImage: `url(${ytplaceholder.src})`,
                                    }}
                                ></div>
                            )}

                            {/* YouTube iframe */}
                            {isPlaying && (
                                <iframe
                                    src="https://www.youtube.com/embed/H7ClHApHc3o?rel=0&controls=1&autoplay=1&mute=0"
                                    title="YouTube video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    loading="lazy"
                                    className="absolute top-0 left-0 w-full h-full z-10"
                                />
                            )}

                            {/* Play button */}
                            {!isPlaying && (
                                <button
                                    aria-label="Play Video"
                                    onClick={() => setIsPlaying(true)}
                                    className="absolute z-10 inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition duration-300"
                                >
                                    <PlayCircle className="w-16 h-16 text-white" />
                                </button>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
