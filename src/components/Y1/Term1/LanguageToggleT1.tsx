"use client";

import { useLanguage } from "@/app/Context/LanguageContext";

const LanguageToggle = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex border-b border-gray-200 mb-6">
            <button
                className={`px-4 py-2 text-sm font-semibold ${
                    language === "en"
                        ? "text-orange-500 border-b-2 border-orange-500"
                        : "text-gray-600"
                }`}
                onClick={() => setLanguage("en")}
            >
                Newsletter ( English )
            </button>
            <button
                className={`px-4 py-2 text-sm font-semibold ml-4 ${
                    language === "fr"
                        ? "text-orange-500 border-b-2 border-orange-500"
                        : "text-gray-600"
                }`}
                onClick={() => setLanguage("fr")}
            >
                Newsletter ( French )
            </button>
        </div>
    );
};

export default LanguageToggle;
