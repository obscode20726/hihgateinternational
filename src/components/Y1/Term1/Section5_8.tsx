"use client";

import Image from "next/image";
import { useLanguage } from "@/app/Context/LanguageContext";

const NewsletterSection5_8 = () => {
    const { language } = useLanguage();

    return (
        <div className="max-w-7xl mx-auto bg-white px-4 py-8 text-justify text-[#024059] font-lexend">
            {language === "en" ? (
                <>
                    <div className="bg-gray-50 text-center px-4 py-2 mb-8 rounded">
                        <h3 className="text-xl font-bold text-[#01254e]">
                            5.8 Solidarity Festival
                        </h3>
                    </div>
                    <div className="space-y-4">
                        <p>
                            The &quot;Solidarity Festival Campaign&quot; at our
                            school saw active participation from the entire
                            community, with teachers and school leadership
                            leading by example in spearheading this initiative.
                            The monetary contributions from each member,
                            including students and their parents, were crucial
                            in making this campaign a reality, for which we
                            express our sincere appreciation.
                        </p>
                        <p>
                            This valued initiative not only involves fundraising
                            but also emphasizes active community participation.
                            As a sign of empathy and solidarity, 20 less
                            fortunate children from the local neighborhood,
                            selected with the help of local leaders, will join
                            High Gate students during our Christmas
                            celebrations. They will benefit from the essential
                            items generously donated during our Solidarity
                            Festival, reinforcing the spirit of happiness, love,
                            and respect.
                        </p>
                    </div>
                    <div className="space-y-4 py-4">
                        <Image
                            src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657de7f7993824f037e45ac7_Untitled%20design.png"
                            width={500}
                            height={600}
                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 90vw, (max-width: 1439px) 45vw, 628px"
                            alt="Solidarity Festival"
                            className="w-full h-fit"
                        />
                    </div>
                </>
            ) : (
                <>
                    <div className="bg-gray-50 text-center px-4 py-2 mb-8 rounded">
                        <h3 className="text-xl font-bold text-[#01254e]">
                            5.8 Festival de Solidarité
                        </h3>
                    </div>
                    <div className="space-y-4">
                        <p>
                            La &quot;Campagne du Festival de Solidarité&quot;
                            dans notre école a connu une participation active de
                            l&apos;ensemble de la communauté, les enseignants et
                            la direction de l&apos;école montrant l&apos;exemple
                            en dirigeant cette initiative. Les contributions
                            monétaires de chaque membre, y compris les élèves et
                            leurs parents, ont été cruciales pour faire de cette
                            campagne une réalité, pour laquelle nous exprimons
                            notre sincère reconnaissance.
                        </p>
                        <p>
                            Cette initiative valorisée implique non seulement la
                            collecte de fonds, mais met également l&apos;accent
                            sur la participation active de la communauté
                            scolaire. En signe d&apos;empathie et de solidarité,
                            20 enfants moins fortunés du voisinage local,
                            sélectionnés avec l&apos;aide des leaders locaux, se
                            joindront aux élèves de High Gate lors de nos
                            célébrations de Noël. Ils bénéficieront des articles
                            essentiels généreusement donnés lors de notre
                            Festival de Solidarité, renforçant l&apos;esprit de
                            bonheur, d&apos;amour et de respect.
                        </p>
                    </div>
                    <div className="space-y-4 py-4">
                        <Image
                            src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657de7f7993824f037e45ac7_Untitled%20design.png"
                            width={500}
                            height={600}
                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 90vw, (max-width: 1439px) 45vw, 628px"
                            alt="Festival de Solidarité"
                            className="w-full h-fit"
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default NewsletterSection5_8;
