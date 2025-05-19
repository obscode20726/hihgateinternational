import React from "react";
import Image from "next/image";

const NewsletterHeader: React.FC = () => {
    return (
        <section
            className="relative h-[80vh] md:h-[60vh] w-full bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage:
                    'url("https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/67ebbacf6b4683da222eb559_1.JPG")',
            }}
        >
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-12 max-w-7xl m-auto text-center">
                <div className="self-baseline">
                    <Image
                        src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657ce5c83457a9bcfeeffc48_Group%206.png"
                        alt="High Gate Logo"
                        width={251}
                        height={100}
                        sizes="(max-width: 479px) 83vw, 251px"
                        loading="lazy"
                        className="mb-4 align-middle"
                    />
                </div>

                <h1 className="text-4xl md:text-6xl font-bold tracking-wider uppercase">
                    Term 1 Newsletter
                </h1>
                <p className="mt-4 text-lg md:text-xl font-medium max-w-2xl">
                    High Gate International Academy
                </p>
            </div>
        </section>
    );
};

export default NewsletterHeader;
