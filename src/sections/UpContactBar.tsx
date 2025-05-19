import Image from "next/image";
import Icon1 from "@/assets/images/icon-1.png";
import Icon2 from "@/assets/images/icon-2.png";
import Icon3 from "@/assets/images/icon-3.png";
import Icon4 from "@/assets/images/icon-4.png";

const CONTACT_INFO = [
    { icon: Icon1, text: "+250 79 89 80 340", label: "Phone number" },
    {
        icon: Icon2,
        text: "info@highgateinternational.com",
        label: "Email address",
    },
    {
        icon: Icon3,
        text: "KG 669 St Gasabo District, Gisozi",
        label: "Physical address",
    },
    { icon: Icon4, text: "POB 6790", label: "Postal address" },
];

export default function UpContactBar() {
    return (
        <div className="bg-[#CC7F00] w-full md:flex px-5 text-xs justify-center gap-2 py-2">
            {CONTACT_INFO.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center gap-2 "
                    role="listitem"
                >
                    <Image
                        src={item.icon}
                        alt={`${item.label} icon`}
                        width={24}
                        height={24}
                        className="w-6 h-6"
                        priority={index === 0}
                        loading={index === 0 ? "eager" : "lazy"}
                    />
                    <h2 className="text-white" aria-label={item.label}>
                        {item.text}
                    </h2>
                </div>
            ))}
        </div>
    );
}
