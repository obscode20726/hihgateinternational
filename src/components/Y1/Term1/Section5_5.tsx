"use client";
import Image from "next/image";
import { useLanguage } from "@/app/Context/LanguageContext";

const NewsletterSection5_5 = () => {
    const { language } = useLanguage();

    return (
        <div className="max-w-7xl mx-auto bg-white px-4 py-8 text-justify text-gray-800 font-sans">
            {language === "en" ? (
                <>
                    <div className="bg-gray-100 text-center px-4 py-2 mb-8 rounded">
                        <h3 className="text-xl font-bold text-blue-900">
                            5.5 CAT-1 and CAT-2 Evaluations
                        </h3>
                    </div>
                    <div className="space-y-4">
                        <p>
                            The evaluations were conducted with commendable
                            precision, reflecting significant improvements
                            resulting from targeted intervention lessons. These
                            sessions allowed teachers to diagnose individual
                            strengths and areas needing improvement,
                            facilitating tailored support for each student.
                        </p>
                        <p>
                            Congratulations on the successful implementation of
                            this vital initiative, which is becoming an integral
                            part of our educational culture. Its continued
                            integration promises to strengthen our
                            students&apos; academic foundations and propel the
                            school towards exceptional performance throughout
                            the academic year.
                        </p>
                    </div>
                    <div className="space-y-4 py-4">
                        <Image
                            src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657de7f7993824f037e45ac7_Untitled%20design.png"
                            width={500}
                            height={600}
                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 90vw, (max-width: 1439px) 45vw, 628px"
                            alt="picture"
                            className="w-full h-fit"
                        />
                    </div>
                </>
            ) : (
                <>
                    <div className="bg-gray-100 text-center px-4 py-2 mb-8 rounded">
                        <h3 className="text-xl font-bold text-blue-900">
                            5.5 Évaluations CAT-1 et CAT-2
                        </h3>
                    </div>
                    <div className="space-y-4">
                        <p>
                            Les évaluations ont été réalisées avec une précision
                            louable, reflétant des améliorations significatives
                            résultant des leçons d&apos;intervention ciblées.
                            Ces sessions ont permis aux enseignants de
                            diagnostiquer les forces individuelles et les
                            domaines nécessitant des améliorations, facilitant
                            un soutien adapté pour chaque élève.
                        </p>
                        <p>
                            Félicitations pour la mise en œuvre réussie de cette
                            initiative vitale, destinée à devenir une partie
                            intégrante de notre culture éducative. Son
                            intégration continue promet de renforcer les bases
                            académiques de nos élèves et de propulser
                            l&apos;école vers des performances exceptionnelles
                            tout au long de l&apos;année académique.
                        </p>
                    </div>
                    <div className="space-y-4 py-4">
                        <Image
                            src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657de7f7993824f037e45ac7_Untitled%20design.png"
                            width={500}
                            height={600}
                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 90vw, (max-width: 1439px) 45vw, 628px"
                            alt="picture"
                            className="w-full h-fit"
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default NewsletterSection5_5;
