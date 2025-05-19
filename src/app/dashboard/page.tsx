"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import EventManagement from "./components/EventManagement";
import SchoolLifeTab from "./components/school-life/SchoolLifeTab";

export default function Dashboard() {
    // --- Section: Tab state ---
    // State managing which dashboard tab is active (events or school-life)
    const [activeTab, setActiveTab] = useState<"events" | "school-life">(
        "events"
    );

    return (
        <div className="flex h-screen bg-[#f5f6fa]">
            {/* Dark Sidebar */}
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                {/* Top Header */}
                <div className="bg-white border-b border-gray-200">
                    <div className="flex justify-between items-center py-4 px-6">
                        <div className="flex items-center">
                            <h2 className="text-lg font-medium text-gray-800">
                                {activeTab === "events"
                                    ? "Events Management"
                                    : "School Life Management"}
                            </h2>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <input
                                    type="search"
                                    placeholder="Search..."
                                    className="w-64 pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-gray-300"
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                    {activeTab === "events" && <EventManagement />}

                    {/* School Life content with similar styling */}
                    {activeTab === "school-life" && <SchoolLifeTab />}
                </div>
            </div>
        </div>
    );
}
