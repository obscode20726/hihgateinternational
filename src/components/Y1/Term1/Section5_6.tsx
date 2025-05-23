"use client";

import Image from "next/image";
import { useLanguage } from "@/app/Context/LanguageContext";

const NewsletterSection5_6 = () => {
    const { language } = useLanguage();

    return (
        <div className="max-w-7xl mx-auto bg-white px-4 py-8 text-justify text-[#024059] font-lexend">
            {language === "en" ? (
                <>
                    <div className="bg-gray-50 text-center px-4 py-2 mb-8 rounded">
                        <h3 className="text-xl font-bold text-[#01254e]">
                            5.6 Medical Check-up
                        </h3>
                    </div>
                    <div className="space-y-4">
                        <p>
                            At High Gate International Academy, students
                            recently benefited from a comprehensive health
                            check-up initiative facilitated by specialized
                            healthcare professionals, including dentists and
                            ophthalmologists. This initiative included students
                            from preschool to primary, as well as dedicated
                            educators and support staff. We express our sincere
                            gratitude to the participating clinics for their
                            invaluable contributions to our school
                            community&apos;s well-being.
                        </p>
                        <p>
                            The success of this health check-up underscores the
                            importance of fostering lasting partnerships with
                            healthcare providers, and we look forward to future
                            collaboration to ensure the long-term health and
                            vitality of our students, teachers, and staff.
                        </p>
                    </div>
                    <div className="space-y-4 py-4">
                        <Image
                            src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657de7f7993824f037e45ac7_Untitled%20design.png"
                            width={500}
                            height={600}
                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 90vw, (max-width: 1439px) 45vw, 628px"
                            alt="Medical check-up session"
                            className="w-full h-fit"
                        />
                    </div>
                </>
            ) : (
                <>
                    <div className="bg-gray-50 text-center px-4 py-2 mb-8 rounded">
                        <h3 className="text-xl font-bold text-[#01254e]">
                            5.6 Bilan de santé / contrôle médical
                        </h3>
                    </div>
                    <div className="space-y-4">
                        <p>
                            À High Gate International Academy, les élèves ont
                            récemment bénéficié d&apos;une initiative complète
                            de bilan de santé facilitée par des professionnels
                            de la santé spécialisés, dont des dentistes et des
                            ophtalmologistes. Cette initiative a inclus des
                            élèves du préscolaire au primaire, ainsi que des
                            éducateurs dévoués et du personnel de soutien. Nous
                            exprimons notre sincère gratitude aux cliniques
                            participantes pour leurs contributions inestimables
                            au bien-être de notre communauté scolaire.
                        </p>
                        <p>
                            Le succès de ce bilan de santé souligne
                            l&apos;importance de favoriser des partenariats
                            durables avec les prestataires de soins de santé, et
                            nous anticipons avec enthousiasme une collaboration
                            future pour assurer la santé et la vitalité à long
                            terme de nos élèves, enseignants et personnel.
                        </p>
                    </div>
                    <div className="space-y-4 py-4">
                        <Image
                            src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657de7f7993824f037e45ac7_Untitled%20design.png"
                            width={500}
                            height={600}
                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 90vw, (max-width: 1439px) 45vw, 628px"
                            alt="Session de bilan de santé"
                            className="w-full h-fit"
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default NewsletterSection5_6;
