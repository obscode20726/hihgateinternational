import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import OurProgramme from "@/sections/OurProgramme";
import WhoWeAre from "@/sections/WhoWeAre";
import NextEvents from "@/sections/NextEvents";
import SchoolLife from "@/sections/SchoolLife";
import { Suspense } from "react";
import SkeletonLoader from "@/components/SkeletonLoader";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <WhoWeAre />
            <OurProgramme />
            <NextEvents />
            <Suspense fallback={<SkeletonLoader />}>
                <SchoolLife />
            </Suspense>

            <Footer />
        </>
    );
}
