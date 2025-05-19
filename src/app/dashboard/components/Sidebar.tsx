import React from "react";

interface SidebarProps {
    activeTab: "events" | "school-life";
    setActiveTab: (tab: "events" | "school-life") => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
    return (
        <div className="w-64 bg-[#101924] text-gray-300 flex-shrink-0">
            <div className="p-5">
                <h1 className="text-xl font-bold text-white mb-8 flex items-center">
                    <span>Dash</span>
                    <span className="text-gray-400">highgate</span>
                </h1>
                <nav className="space-y-1">
                    <button
                        onClick={() => setActiveTab("events")}
                        className={`w-full flex items-center px-4 py-2.5 text-sm rounded-lg transition-colors ${
                            activeTab === "events"
                                ? "bg-[#1c2633] text-white"
                                : "text-gray-400 hover:bg-[#1c2633] hover:text-white"
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                        Events
                    </button>
                    <button
                        onClick={() => setActiveTab("school-life")}
                        className={`w-full flex items-center px-4 py-2.5 text-sm rounded-lg transition-colors ${
                            activeTab === "school-life"
                                ? "bg-[#1c2633] text-white"
                                : "text-gray-400 hover:bg-[#1c2633] hover:text-white"
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                        </svg>
                        School Life
                    </button>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
