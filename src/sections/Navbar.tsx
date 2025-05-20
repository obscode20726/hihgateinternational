"use client";

import UpContactBar from "@/sections/UpContactBar";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "@/components/Button";

export default function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target as Node)
            ) {
                setIsMobileMenuOpen(false);
                setOpenDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const isActive = (path: string) => {
        return pathname === path;
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMenuItemClick = () => {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
    };

    const toggleDropdown = (menuName: string) => {
        setOpenDropdown(openDropdown === menuName ? null : menuName);
    };

    return (
        <section className="block w-full fixed top-0 z-[100]">
            <UpContactBar />
            <div className="w-full relative px-0 sm:px-5 md:px-12 bg-white">
                <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
                    <a
                        href="\"
                        className="pl-4 sm:pl-0 relative text-[#333] float-left"
                    >
                        <Image
                            src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/652e65f801915f3f235665b7_Group%204.svg"
                            alt="logo"
                            width={158}
                            height={96}
                            className="h-16 lg:h-24 text-white w-[158px]"
                        />
                    </a>
                    {/* Mobile Menu Button */}
                    <div className="lg:hidden pr-4">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-[#024059] text-2xl"
                        >
                            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden lg:flex flex-1 justify-between font-lexend items-center py-3 float-right relative">
                        <div className="hidden lg:flex flex-1 justify-center items-center self-center ">
                            <Link
                                href="/"
                                className={`capitalize py-4 px-3 text-sm font-semibold no-underline ${
                                    isActive("/")
                                        ? "text-[#dc9853]"
                                        : "text-[#024059] hover:text-[#dc9853]"
                                }`}
                            >
                                home
                            </Link>
                            <div className="relative group">
                                <div className="capitalize relative text-[#024059] py-4 pr-3 text-sm font-semibold transition-all cursor-pointer no-underline">
                                    <div className="flex items-center group-hover:text-black gap-2">
                                        <Link
                                            href="/admission"
                                            onClick={handleMenuItemClick}
                                            className="hover:text-[#dc9853]"
                                        >
                                            <span>Admission</span>
                                        </Link>
                                        <IoIosArrowDown className="group-hover:rotate-180 transition-all" />
                                    </div>
                                </div>
                                <div className="absolute left-0 top-10 w-auto flex-col gap-[10px] font-normal bg-white rounded-md py-[15px] px-[10px] shadow-md transition-all duration-700 ease-out transform -translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
                                    <Link
                                        href="/student-enrollment-form"
                                        className={`flex cursor-pointer text-[14px] items-center py-1 px-8 border border-solid border-transparent ${
                                            isActive("/student-enrollment-form")
                                                ? "text-[#dc9853]"
                                                : "text-[#024059] hover:text-[#dc9853]"
                                        }`}
                                    >
                                        <span className="whitespace-nowrap">
                                            Admission Form
                                        </span>
                                    </Link>
                                    <Link
                                        href="/tuitition-fees"
                                        className={`flex cursor-pointer text-[14px] items-center py-1 px-8 border border-solid border-transparent ${
                                            isActive("/tuitition-fees")
                                                ? "text-[#dc9853]"
                                                : "text-[#024059] hover:text-[#dc9853]"
                                        }`}
                                    >
                                        <span className="whitespace-nowrap">
                                            Tuition Fees
                                        </span>
                                    </Link>
                                    <Link
                                        href="/calendar"
                                        className={`flex cursor-pointer text-[14px] items-center py-1 px-8 border border-solid border-transparent ${
                                            isActive("/admission/calendar")
                                                ? "text-[#dc9853]"
                                                : "text-[#024059] hover:text-[#dc9853]"
                                        }`}
                                    >
                                        <span className="whitespace-nowrap">
                                            School Calendar
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <Link
                                href="/events"
                                className={`capitalize py-4 pr-2 text-sm font-semibold no-underline ${
                                    isActive("/events")
                                        ? "text-[#dc9853]"
                                        : "text-[#024059] hover:text-[#dc9853]"
                                }`}
                            >
                                Events
                            </Link>
                            <div className="relative group">
                                <div className="capitalize relative py-4 pr-2 text-sm font-semibold transition-all cursor-pointer no-underline">
                                    <div className="flex items-center group-hover:text-black text-[#024059] gap-2">
                                        <Link
                                            href=""
                                            onClick={handleMenuItemClick}
                                            className="hover:text-[#dc9853]"
                                        >
                                            <span>Newsletter</span>
                                        </Link>
                                        <IoIosArrowDown className="group-hover:rotate-180 transition-all" />
                                    </div>
                                </div>
                                <div className="absolute left-0 top-10 w-auto flex-col gap-[10px] font-normal bg-white rounded-md py-[15px] px-[10px] shadow-md transition-all duration-700 ease-out transform -translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
                                    <Link
                                        href={""}
                                        className="flex cursor-pointer text-[#024059] text-[14px] items-center py-1 px-8 border border-solid border-transparent hover:text-[#dc9853]"
                                    >
                                        <span className="whitespace-nowrap">
                                            Year 2024 - 2025
                                        </span>
                                    </Link>
                                    <Link
                                        href={""}
                                        className="flex cursor-pointer text-[#024059] text-[14px] items-center py-1 px-8 border border-solid border-transparent hover:text-[#dc9853]"
                                    >
                                        <span className="whitespace-nowrap">
                                            Year 2023 - 2024
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="capitalize relative py-4 pr-2 text-sm font-semibold transition-all cursor-pointer no-underline">
                                    <div className="flex items-center group-hover:text-black text-[#024059] gap-2">
                                        <Link
                                            href=""
                                            onClick={handleMenuItemClick}
                                            className="hover:text-[#dc9853]"
                                        >
                                            <span>School Life</span>
                                        </Link>
                                        <IoIosArrowDown className="group-hover:rotate-180 transition-all" />
                                    </div>
                                </div>
                                <div className="absolute left-0 top-10 w-auto flex-col gap-[10px] font-normal bg-white rounded-md py-[15px] px-[10px] shadow-md transition-all duration-700 ease-out transform -translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
                                    <Link
                                        href={""}
                                        className="flex cursor-pointer text-[#024059] text-[14px] items-center py-1 px-8 border border-solid border-transparent hover:text-[#dc9853]"
                                    >
                                        <span className="whitespace-nowrap">
                                            School Activities
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="capitalize relative py-4 pr-2 text-sm font-semibold transition-all cursor-pointer no-underline">
                                    <div className="flex items-center group-hover:text-black text-[#024059] gap-2">
                                        <Link
                                            href=""
                                            onClick={handleMenuItemClick}
                                            className="hover:text-[#dc9853]"
                                        >
                                            <span>About Us</span>
                                        </Link>
                                        <IoIosArrowDown className="group-hover:rotate-180 transition-all" />
                                    </div>
                                </div>
                                <div className="absolute left-0 top-10 w-auto flex-col gap-[10px] font-normal bg-white rounded-md py-[15px] px-[10px] shadow-md transition-all duration-700 ease-out transform -translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
                                    <Link
                                        href={"/about-us"}
                                        className="flex cursor-pointer text-[#024059] text-[14px] items-center py-1 px-8 border border-solid border-transparent hover:text-[#dc9853]"
                                    >
                                        <span className="whitespace-nowrap">
                                            Who we are
                                        </span>
                                    </Link>
                                    <Link
                                        href={"/our-curriculum"}
                                        className="flex cursor-pointer text-[#024059] text-[14px] items-center py-1 px-8 border border-solid border-transparent hover:text-[#dc9853]"
                                    >
                                        <span className="whitespace-nowrap">
                                            Our curriculum
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <a
                                href="/contact"
                                className="text-[#024059] capitalize px-5 py-4 font-lexend text-sm font-semibold"
                            >
                                contact us
                            </a>
                            <Button
                                href="/student-enrollment-form"
                                className="mt-0"
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div
                ref={mobileMenuRef}
                className={`lg:hidden fixed top-0 left-0 w-full bg-white transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                        ? "translate-y-40 md:translate-y-24"
                        : "-translate-y-full"
                }`}
            >
                <div className="flex flex-col justify-center text-center items-center py-2">
                    <Link
                        href="/"
                        onClick={handleMenuItemClick}
                        className={`capitalize py-4 px-5 text-sm font-semibold no-underline ${
                            isActive("/")
                                ? "text-[#dc9853]"
                                : "text-[#024059] hover:text-[#dc9853]"
                        }`}
                    >
                        home
                    </Link>
                    <div className="relative flex flex-col items-center w-full">
                        <div
                            className="capitalize relative text-[#024059] py-4 px-5 text-sm font-semibold transition-all cursor-pointer no-underline"
                            onClick={() => toggleDropdown("admission")}
                        >
                            <div className="flex items-center gap-2">
                                <span>Admission</span>
                                <IoIosArrowDown
                                    className={`transition-all ${
                                        openDropdown === "admission"
                                            ? "rotate-180"
                                            : ""
                                    }`}
                                />
                            </div>
                        </div>
                        <div
                            className={`w-auto flex flex-col items-center gap-[10px] font-normal bg-white rounded-md shadow-md transition-all duration-300 ease-out ${
                                openDropdown === "admission"
                                    ? "max-h-[500px] opacity-100 py-[15px] px-[10px]"
                                    : "max-h-0 opacity-0 overflow-hidden py-0 px-0"
                            }`}
                        >
                            <Link
                                href="/student-enrollment-form"
                                onClick={handleMenuItemClick}
                                className={`flex cursor-pointer text-[14px] items-center py-1 px-8 border border-solid border-transparent ${
                                    isActive("/student-enrollment-form")
                                        ? "text-[#dc9853]"
                                        : "text-[#024059] hover:text-[#dc9853]"
                                }`}
                            >
                                <span className="whitespace-nowrap">
                                    Admission Form
                                </span>
                            </Link>
                            <Link
                                href="/tuitition-fees"
                                onClick={handleMenuItemClick}
                                className={`flex cursor-pointer text-[14px] items-center py-1 px-8 border border-solid border-transparent ${
                                    isActive("/tuitition-fees")
                                        ? "text-[#dc9853]"
                                        : "text-[#024059] hover:text-[#dc9853]"
                                }`}
                            >
                                <span className="whitespace-nowrap">
                                    Tuition Fees
                                </span>
                            </Link>
                            <Link
                                href="/calendar"
                                onClick={handleMenuItemClick}
                                className={`flex cursor-pointer text-[14px] items-center py-1 px-8 border border-solid border-transparent ${
                                    isActive("/admission/calendar")
                                        ? "text-[#dc9853]"
                                        : "text-[#024059] hover:text-[#dc9853]"
                                }`}
                            >
                                <span className="whitespace-nowrap">
                                    School Calendar
                                </span>
                            </Link>
                        </div>
                    </div>
                    <Link
                        href="/events"
                        onClick={handleMenuItemClick}
                        className={`capitalize py-4 px-5 text-sm font-semibold no-underline ${
                            isActive("/events")
                                ? "text-[#dc9853]"
                                : "text-[#024059] hover:text-[#dc9853]"
                        }`}
                    >
                        Events
                    </Link>
                    <div className="relative flex flex-col items-center w-full">
                        <div
                            className="capitalize relative py-4 px-5 text-sm font-semibold transition-all cursor-pointer no-underline text-[#024059]"
                            onClick={() => toggleDropdown("newsletter")}
                        >
                            <div className="flex items-center gap-2">
                                <span>Newsletter</span>
                                <IoIosArrowDown
                                    className={`transition-all ${
                                        openDropdown === "newsletter"
                                            ? "rotate-180"
                                            : ""
                                    }`}
                                />
                            </div>
                        </div>
                        <div
                            className={`w-auto flex flex-col items-center gap-[10px] font-normal bg-white rounded-md shadow-md transition-all duration-300 ease-out ${
                                openDropdown === "newsletter"
                                    ? "max-h-[500px] opacity-100 py-[15px] px-[10px]"
                                    : "max-h-0 opacity-0 overflow-hidden py-0 px-0"
                            }`}
                        >
                            <Link
                                href=""
                                onClick={handleMenuItemClick}
                                className="flex cursor-pointer text-[#024059] text-[14px] items-center py-1 px-8 border border-solid border-transparent hover:text-[#dc9853]"
                            >
                                <span className="whitespace-nowrap">
                                    Year 2024 - 2025
                                </span>
                            </Link>
                            <Link
                                href=""
                                onClick={handleMenuItemClick}
                                className="flex cursor-pointer text-[#024059] text-[14px] items-center py-1 px-8 border border-solid border-transparent hover:text-[#dc9853]"
                            >
                                <span className="whitespace-nowrap">
                                    Year 2023 - 2024
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="relative flex flex-col items-center w-full">
                        <div
                            className="capitalize relative py-4 px-5 text-sm font-semibold transition-all cursor-pointer no-underline text-[#024059]"
                            onClick={() => toggleDropdown("aboutUs")}
                        >
                            <div className="flex items-center gap-2">
                                <span>About Us</span>
                                <IoIosArrowDown
                                    className={`transition-all ${
                                        openDropdown === "aboutUs"
                                            ? "rotate-180"
                                            : ""
                                    }`}
                                />
                            </div>
                        </div>
                        <div
                            className={`w-auto flex flex-col items-center gap-[10px] font-normal bg-white rounded-md shadow-md transition-all duration-300 ease-out ${
                                openDropdown === "aboutUs"
                                    ? "max-h-[500px] opacity-100 py-[15px] px-[10px]"
                                    : "max-h-0 opacity-0 overflow-hidden py-0 px-0"
                            }`}
                        >
                            <Link
                                href="/about-us"
                                onClick={handleMenuItemClick}
                                className="flex cursor-pointer text-[#024059] text-[14px] items-center py-1 px-8 border border-solid border-transparent hover:text-[#dc9853]"
                            >
                                <span className="whitespace-nowrap">
                                    Who we are
                                </span>
                            </Link>
                            <Link
                                href="/our-curriculum"
                                onClick={handleMenuItemClick}
                                className="flex cursor-pointer text-[#024059] text-[14px] items-center py-1 px-8 border border-solid border-transparent hover:text-[#dc9853]"
                            >
                                <span className="whitespace-nowrap">
                                    Our curriculum
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center w-full">
                        <div
                            className="capitalize relative py-4 px-5 text-sm font-semibold transition-all cursor-pointer no-underline text-[#024059]"
                            onClick={() => toggleDropdown("schoolLife")}
                        >
                            <div className="flex items-center gap-2">
                                <span>School Life</span>
                                <IoIosArrowDown
                                    className={`transition-all ${
                                        openDropdown === "schoolLife"
                                            ? "rotate-180"
                                            : ""
                                    }`}
                                />
                            </div>
                        </div>
                        <div
                            className={`w-auto flex flex-col items-center gap-[10px] font-normal bg-white rounded-md shadow-md transition-all duration-300 ease-out ${
                                openDropdown === "schoolLife"
                                    ? "max-h-[500px] opacity-100 py-[15px] px-[10px]"
                                    : "max-h-0 opacity-0 overflow-hidden py-0 px-0"
                            }`}
                        >
                            <Link
                                href=""
                                onClick={handleMenuItemClick}
                                className="flex cursor-pointer text-[#024059] text-[14px] items-center py-1 px-8 border border-solid border-transparent hover:text-[#dc9853]"
                            >
                                <span className="whitespace-nowrap">
                                    School Activities
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
