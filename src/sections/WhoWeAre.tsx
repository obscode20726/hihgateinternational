import ytplaceholder from "@/assets/images/youtube-placeholder.svg";
import Button from "../components/Button";
import Image from "next/image";

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
    return (
        <section className="bg-white mt-36 pt-16">
            <div className="justify-between py-16">
                <div className="px-5 md:px-12 justify-center">
                    <div className="mx-auto justify-between self-center w-full max-w-7xl">
                        <div className="w-layout-grid lynx-grid-image-right">
                            <div className="pl-[5%] pr-[5%] md:pl-[15%]">
                                <h2 className="autoShow text-center lg:text-left text-[29px] md:text-[34px] lg:text-[46px] xlg:text-[46px] text-[#cc7f00] font-lexend leading-[120%] mt-0 mb-9 font-bold max-w-[540px] md:max-w-[740px]">
                                    Who we are
                                </h2>
                                <p className="autoShow text-center lg:text-left text-[16px] sm:text-[18px] text-slate-800 font-varela leading-[165%] max-w-[820px] mb-3">
                                    High Gate International Academy is a modern
                                    school located in Kigali, Rwanda. The school
                                    offers daycare, nursery and primary
                                    education in a nurturing and inclusive
                                    environment.
                                </p>
                                <p className="autoShow text-[14px] lg:text-[16px] font-verdana text-center lg:text-left text-[#024059] my-0 font-normal">
                                    Your children will have access to:
                                </p>
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="autoShow border-black"
                                    >
                                        <h1 className="autoShow text-[#cc7f00] text-center lg:text-left mt-[10px] font-arial leading-[44px] mb-0 text-[20px] font-bold">
                                            {feature.title}
                                        </h1>
                                        <p className="autoShow text-center lg:text-left text-[14px] lg:text-[16px] text-[#024059] font-verdana leading-5 my-0 font-normal">
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
                                    </div>
                                ))}
                            </div>
                            <div className=" autoShow flex flex-row relative justify-center items-stretch">
                                <Image
                                    src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/672cad193c4cf22f51c8618a_cat%201%20(1200%20x%201350%20px).jpg"
                                    alt="School image"
                                    loading="lazy"
                                    sizes="(max-width: 1215px) 100vw, 1215px"
                                    className=" animate-float bottom-[-25px] left-[20px] md:bottom-[-25px] md:left-[-1px] lg:bottom-[-25px] lg:left-[-20px] max-w-[40%] absolute z-10 object-cover rounded-[30px] lg:max-w-[56%] shadow-[0_60px_60px_-15px_#1f20221a]"
                                    width={1200}
                                    height={1350}
                                />
                                <Image
                                    src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/668d5fa1c0a504eed33ec594_8.jpg"
                                    alt="School image"
                                    loading="lazy"
                                    sizes="(max-width: 1215px) 100vw, 1215px"
                                    className="object-cover animate-float max-w-full rounded-[30px] align-middle"
                                    width={1200}
                                    height={800}
                                />
                            </div>
                        </div>
                        <div
                            className=" relative pt-[56.170213%] mt-[60px] bg-cover w-full pb-0 px-0 "
                            style={{
                                backgroundImage: `url(${ytplaceholder.src})`,
                                backgroundPosition: "50%",
                            }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/H7ClHApHc3o?rel=0&controls=1&autoplay=0&mute=0&start=0"
                                frameBorder={0}
                                className="absolute left-0 top-0 w-full h-full pointer-events-auto"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
