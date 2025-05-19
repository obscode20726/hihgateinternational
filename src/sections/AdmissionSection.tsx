import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

const sections = [
    {
        title: "Daycare",
        description:
            "The Daycare Section at High Gate International Academy provides a nurturing and stimulating environment for children aged 16 months to 2 years.  ensuring a strong educational foundation. Enrolling your child in the Crèche Section at High Gate International Academy promises a joyous and transformative early childhood experience.",
        applyLink: "https://forms.gle/c44WF144dFjQeDJu7", // internal route
    },
    {
        title: "Nursery",
        description:
            "The Nursery Section at High Gate International Academy offers a nurturing and enriching environment for children aged 2 to 5 years old. The section is dedicated to providing a strong foundation for early childhood education, fostering growth and development in a safe and engaging setting.  Enrolling your child in the Nursery Section ensures a supportive and holistic early childhood experience.",
        applyLink: "https://forms.gle/c44WF144dFjQeDJu7",
    },
    {
        title: "Primary",
        description:
            "The Primary Section at High Gate International Academy offers a comprehensive and engaging educational experience for children aged 5 to 11 years old. With a focus on academic excellence and holistic development, the section provides a stimulating and supportive learning environment. Enrolling your child in the Primary Section at High Gate International Academy ensures a well-rounded and enriching educational journey.",
        applyLink: "https://forms.gle/c44WF144dFjQeDJu7",
    },
];

export default function AdmissionsPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [progressHeight, setProgressHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll(".section-block");

            sections.forEach((section, idx) => {
                const rect = section.getBoundingClientRect();
                if (
                    rect.top < window.innerHeight * 0.45 &&
                    rect.bottom > window.innerHeight * 0.25
                ) {
                    setActiveIndex(idx);
                }
            });

            // Step height = 100% / (number of steps - 1)
            const stepPercent = 100 / (sections.length - 1);
            setProgressHeight(activeIndex * stepPercent);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Run on mount
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeIndex]);

    return (
        <div className="flex flex-col bg-white">
            {/* Hero Section */}
            <div
                className="relative h-[50vh] bg-cover bg-center"
                style={{
                    backgroundImage:
                        'url("https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/6623ad42330fd69fddd54ffe_IMG_8468.JPG")',
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h1 className="text-white text-5xl md:text-6xl font-bold">
                        Admissions
                    </h1>
                </div>
            </div>

            {/* Sections */}
            <div className="max-w-7xl w-full mx-auto py-20 px-4">
                <h2 className="text-center text-3xl font-bold text-gray-800 mb-20">
                    Our Sections
                </h2>

                <div className="relative flex">
                    {/* Left side vertical bar */}
                    <div className="relative flex flex-col items-center mr-12">
                        {/* Vertical bar */}
                        <div className="w-[0.1rem] bg-gray-300 h-[65%] md:h-[70%] xlg:h-3/4  relative">
                            <motion.div
                                className="bg-black absolute top-0 left-0 w-full"
                                style={{ height: `${progressHeight}%` }}
                                transition={{ type: "tween", duration: 0.4 }}
                            />
                        </div>

                        {/* Numbers positioned absolutely */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col gap-80 md:gap-56 lg:gap-48">
                            {sections.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`flex items-center justify-center w-10 h-10 rounded-full text-white font-bold transition-all duration-300 ${
                                        idx === activeIndex
                                            ? "bg-black scale-110"
                                            : "bg-gray-400 scale-100"
                                    }`}
                                >
                                    {idx + 1}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side content */}
                    <div className="flex flex-col w-full gap-8">
                        {sections.map((section, idx) => (
                            <motion.div
                                key={idx}
                                className="section-block flex flex-col transition-all duration-500"
                                initial={{ opacity: 0.3, filter: "blur(4px)" }}
                                animate={{
                                    opacity: idx === activeIndex ? 1 : 0.3,
                                    filter:
                                        idx === activeIndex
                                            ? "blur(0px)"
                                            : "blur(4px)",
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Title */}
                                <h3 className="text-3xl text-[#CC7F00] font-bold mb-4">
                                    {section.title}
                                </h3>

                                {/* Description + Button */}
                                <p className="text-gray-600 max-w-fit mb-6">
                                    {section.description}
                                </p>

                                <Button
                                    href={section.applyLink}
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded w-fit"
                                >
                                    Apply now
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
