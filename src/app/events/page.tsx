"use client";

import React from "react";
import Navbar from "@/sections/Navbar";
import NextEvents from "@/sections/NextEvents";
import Footer from "@/sections/Footer";
export default function EventsPage() {
    return (
        <>
            <Navbar />
            <div className="mt-40 md:mt-24">
                <NextEvents />
            </div>

            <Footer />
        </>
    );
}
