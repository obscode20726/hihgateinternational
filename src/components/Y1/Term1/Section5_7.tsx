"use client";

import Image from "next/image";
import { useLanguage } from "@/app/Context/LanguageContext";

const NewsletterSection5_7 = () => {
    const { language } = useLanguage();

    return (
        <div className="max-w-7xl mx-auto bg-white px-4 py-8 text-justify text-[#024059] font-lexend">
            {language === "en" ? (
                <>
                    <div className="bg-gray-50 text-center px-4 py-2 mb-8 rounded">
                        <h3 className="text-xl font-bold text-[#01254e]">
                            5.7 Children&apos;s Day
                        </h3>
                    </div>
                    <div className="space-y-4">
                        <p>
                            Children&apos;s Day at our institution was centered
                            around the theme &quot;For Every Child, Every
                            Right,&quot; embodying our commitment to instilling
                            in our students the respect, rights, and
                            responsibilities they naturally deserve. Various
                            activities were meticulously organized to convey
                            these principles, providing our students with a
                            meaningful platform to understand the unfortunate
                            denial of rights experienced by some children
                            globally due to factors such as political conflicts,
                            wars, poverty, and parental neglect.
                        </p>
                        <p>
                            Student presentations, delivered eloquently in
                            French, English, and Kinyarwanda, illuminated these
                            issues before parents and teachers. Additionally,
                            the occasion also marked the beginning of the
                            &quot;Solidarity Festival Campaign,&quot; where our
                            school community actively collected donations from
                            parents, teachers, and friends to share essential
                            items such as food, clothing, and toys during the
                            Christmas celebration, thus fostering a sense of
                            happiness, love, and respect for less fortunate
                            children. The campaign aims to cultivate empathy
                            among our young students.
                        </p>
                    </div>
                    <div className="space-y-4 py-4">
                        <Image
                            src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657de7f7993824f037e45ac7_Untitled%20design.png"
                            width={500}
                            height={600}
                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 90vw, (max-width: 1439px) 45vw, 628px"
                            alt="Children's Day celebration"
                            className="w-full h-fit"
                        />
                    </div>
                </>
            ) : (
                <>
                    <div className="bg-gray-50 text-center px-4 py-2 mb-8 rounded">
                        <h3 className="text-xl font-bold text-[#01254e]">
                            5.7 Journée des Enfants
                        </h3>
                    </div>
                    <div className="space-y-4">
                        <p>
                            La Journée des enfants dans notre établissement a
                            été centrée autour du thème &quot;Pour chaque
                            Enfant, Chaque Droit&quot;, incarnant notre
                            engagement à inculquer à nos élèves le respect, les
                            droits et les responsabilités qu&apos;ils méritent
                            naturellement. Diverses activités ont été
                            méticuleusement organisées pour transmettre ces
                            principes, offrant une plateforme significative à
                            nos élèves pour comprendre le déni malheureux des
                            droits vécus par certains enfants à l&apos;échelle
                            mondiale en raison de facteurs tels que les conflits
                            politiques, les guerres, la pauvreté et la
                            négligence parentale.
                        </p>
                        <p>
                            Des présentations d&apos;élèves, livrées de manière
                            éloquente en français, anglais et kinyarwanda, ont
                            éclairé ces problèmes devant les parents et les
                            enseignants. En plus, l&apos;occasion a également
                            marqué le début de la &quot;Campagne du Festival de
                            Solidarité&quot;, où notre communauté scolaire a
                            activement collecté des dons auprès des parents,
                            enseignants et amis pour partager des articles
                            essentiels tels que la nourriture, les vêtements et
                            les jeux lors de la fête de Noël, favorisant ainsi
                            un sentiment de bonheur, d&apos;amour et de respect
                            envers les enfants moins favorisés. La campagne vise
                            à cultiver l&apos;empathie parmi nos jeunes
                            étudiants.
                        </p>
                    </div>
                    <div className="space-y-4 py-4">
                        <Image
                            src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657de7f7993824f037e45ac7_Untitled%20design.png"
                            width={500}
                            height={600}
                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 90vw, (max-width: 1439px) 45vw, 628px"
                            alt="Célébration de la Journée des Enfants"
                            className="w-full h-fit"
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default NewsletterSection5_7;
