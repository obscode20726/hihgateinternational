// components/SectionLogo.tsx
import Image from "next/image";

const SectionLogo = () => {
    return (
        <section className="bg-white pt-5 px-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center gap-6 flex-wrap">
                <Image
                    src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657cee01dd1607d81594ffaa_12%201.png"
                    alt="Logo 1"
                    width={59}
                    height={59}
                />
                <Image
                    src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657cee0fd18a2454f1cb5c4f_13%201-p-500.png"
                    alt="Logo 2"
                    width={110}
                    height={33}
                    sizes="(max-width: 479px) 34vw, 110px"
                />
                <Image
                    src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657cee50f2d9e86117c9f5ad_14%201.png"
                    alt="Logo 3"
                    width={103}
                    height={33}
                />
            </div>
        </section>
    );
};

export default SectionLogo;
