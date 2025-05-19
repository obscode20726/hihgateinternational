import React from "react";

interface HeaderProps {
    activeTab: "events" | "school-life";
}

const Header: React.FC<HeaderProps> = ({ activeTab }) => {
    return (
        <h2 className="text-black">
            {activeTab === "events"
                ? "Events Management"
                : "School Life Management"}
        </h2>
    );
};

export default Header;
