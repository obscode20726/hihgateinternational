import React from "react";
import Link from "next/link";

export type ButtonProps = {
    href?: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
    href,
    children,
    className = "",
    onClick,
}) => (
    <div className="flex justify-center lg:justify-start">
        <Link
            href={href || "#"}
            className={`bg-[#cc7f00] text-white rounded-full px-6 py-3 font-semibold hover:bg-[#b37000] transition-colors ${className}`}
            onClick={onClick}
        >
            {children}
        </Link>
    </div>
);

export default Button;
