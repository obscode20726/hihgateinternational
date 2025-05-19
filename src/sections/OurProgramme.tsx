import Image from "next/image";
import Button from "../components/Button";

export default function OurProgramme() {
    return (
        <section className="bg-[#ffecce] py-8">
            <div className="max-w-7xl mx-auto px-5 md:px-12 py-16">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl text-[#024059] font-bold mb-3 text-center lg:text-left">
                            Programs We Offer
                        </h1>
                        <p className="text-sm sm:text-base text-[#024059] text-center lg:text-left mb-10">
                            We offer three programs to ensure that children have
                            the best possible supports and development to
                            integrate well.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center bg-red-200 p-6 h-28 md:h-32">
                                <h2 className="text-lg md:text-2xl font-semibold text-[#024059]">
                                    Canadian Education System
                                </h2>
                            </div>
                            <div className="flex items-center bg-red-400 p-6 h-28 md:h-32">
                                <h2 className="text-lg md:text-xl xlg:text-2xl font-semibold text-[#024059]">
                                    Cambridge Assessment International Education
                                </h2>
                            </div>
                        </div>
                        <Button href="#" className="mt-8">
                            Learn more
                        </Button>
                    </div>
                    <div className="autoShow flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[600px] aspect-square">
                            <Image
                                src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/672caed6ee210a807488ea53_cat%201%20(1200%20x%201350%20px)%20(1).jpg"
                                alt="Our programs"
                                fill
                                className="object-cover rounded-tl-[100px] lg:rounded-tl-[150px] rounded-br-[100px] lg:rounded-br-[150px]"
                                sizes="(max-width: 1200px) 100vw, 600px"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
