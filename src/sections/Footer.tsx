import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <section className="bg-[#024059] py-16 px-[5%]">
            <div className="w-full max-w-7xl relative mx-auto">
                <div className="w-layout-grid grid f-footer-grid">
                    <div id="w-node-_5f9dc593-c678-707f-00d0-54798acb7c55-8acb7c52">
                        <div className="mb-6">
                            <Link
                                href={"/"}
                                className="max-w-full inline-block"
                            >
                                <Image
                                    src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/6464ea5cc9dbd74a3402ff70_Frame%20451.png"
                                    alt="logo footer"
                                    sizes="(max-width: 479px) 100vw, 170px"
                                    width={170}
                                    height={96}
                                    className="mx-0"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="flex-col">
                        <div className="f-footer-title text-[#cc7f00] text-base leading-6 font-medium mb-6 ">
                            Admissions
                        </div>
                        <Link
                            href={"/student-enrollment-form"}
                            className="f-footer-link-2 inline-block text-white w-full max-w-full my-[10px] py-1 text-[14px] leading-6"
                        >
                            <div className="text-sm font-normal">
                                Enrollment Form
                            </div>
                        </Link>
                        <Link
                            href={"/tuitition-fees"}
                            className="f-footer-link-2 inline-block text-white w-full max-w-full my-[10px] py-1 text-[14px] leading-6"
                        >
                            <div className="text-sm font-normal">
                                Tuitions Fees
                            </div>
                        </Link>
                    </div>
                    <div className="flex-col">
                        <div className="f-footer-title text-[#cc7f00] text-base leading-6 font-medium mb-6 ">
                            About us
                        </div>
                        <Link
                            href={"/about-us"}
                            className="f-footer-link-2 inline-block text-white w-full max-w-full my-[10px] py-1 text-[14px] leading-6"
                        >
                            <div className="text-sm font-normal">Our story</div>
                        </Link>
                    </div>
                    <div className="flex-col">
                        <div className="f-footer-title text-[#cc7f00] text-base leading-6 font-medium mb-6 ">
                            News
                        </div>
                        <Link
                            href={"/events"}
                            className="f-footer-link-2 inline-block text-white w-full max-w-full my-[10px] py-1 text-[14px] leading-6"
                        >
                            <div className="text-sm font-normal">
                                Upcoming event
                            </div>
                        </Link>
                    </div>
                    <div className="flex-col">
                        <div className="f-footer-title text-[#cc7f00] text-base leading-6 font-medium mb-6 ">
                            Our curriculum
                        </div>
                        <Link
                            href={"/our-curriculum"}
                            className="f-footer-link-2 inline-block text-white w-full max-w-full my-[10px] py-1 text-[14px] leading-6"
                        >
                            <div className="text-sm font-normal">
                                Curriculum
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className=" bg-[#f3f5fb33] w-full h-[1px] mt-16 mb-8"></div>
            {/* Bottom Row */}
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center mt-6">
                <p className="text-sm text-white/80">
                    Copyright &copy; {new Date().getFullYear()}
                </p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a
                        href="#"
                        className="bg-white text-[#d18202] rounded-full p-2"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="#"
                        className="bg-white text-[#d18202] rounded-full p-2"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="#"
                        className="bg-white text-[#d18202] rounded-full p-2"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </section>
    );
}
