import Image from "next/image";
const CanadianEducationSection = () => (
    <section className="bg-white font-lexend">
        <div></div>

        <div className="px-6 max-w-7xl mx-auto bg-white py-10 text-gray-800">
            {/* Header */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#cc7f00] mb-2">
                Canadian Education System
            </h1>
            <div className="grid lg:grid-cols-2 gap-10">
                <p className="mb-8">
                    One and only school offering Canadian programme in Rwanda:
                </p>
                <p className="mb-8">
                    Seule et unique école offrant le programme canadien au
                    Rwanda:
                </p>
            </div>
            {/* Two-column grid */}
            <div className="grid lg:grid-cols-2 gap-10 mb-12">
                <div className="space-y-4 text-justify">
                    <p>
                        The Canadian Education System, globally recognized for
                        its innovative teaching methods and multicultural
                        environment, is a beacon of excellence. High Gate
                        International Academy embraces this system, placing a
                        strong emphasis on critical thinking, creativity, and
                        problem-solving skills essential for the 21st century.
                        Our unique programme is designed around play and
                        essential life skills, enabling learners to take
                        ownership of their education through engaging games. By
                        adhering to the rigorous standards set in Quebec, we
                        ensure our students receive the highest level of
                        cognitive development, blending traditional academic
                        excellence with modern educational practices.
                    </p>
                    <p>
                        At High Gate International Academy, we take pride in our
                        bilingual approach, combining a strong command of
                        French, with an accent aligned with France, and the
                        comprehensive Cambridge International curriculum for our
                        anglophone students. This dual-language system ensures
                        that learners are not only proficient in both languages
                        but also equipped with the highest thinking skills
                        required in today&apos;s global society. Our
                        accreditation with Cambridge International further
                        validates our commitment to delivering a world-class
                        education, preparing students to excel in their future
                        academic and professional endeavors.
                    </p>
                </div>

                <div className="space-y-4 text-justify">
                    <p>
                        Le système éducatif canadien, reconnu mondialement pour
                        ses méthodes d&apos;enseignement innovantes et son
                        environnement multiculturel, est un modèle
                        d&apos;excellence. L&apos;Académie Internationale High
                        Gate adopte ce système en mettant fortement
                        l&apos;accent sur la pensée critique, la créativité et
                        les compétences en résolution de problèmes, essentielles
                        pour le 21ème siècle. Notre programme unique est
                        construit autour du jeu et des compétences essentielles
                        pour la vie, permettant aux étudiants de
                        s&apos;approprier leur éducation par des jeux
                        engageants. En respectant les normes rigoureuses
                        établies au Québec, nous garantissons à nos étudiants le
                        plus haut niveau de développement cognitif, alliant
                        excellence académique traditionnelle et pratiques
                        éducatives modernes.
                    </p>
                    <p>
                        À High Gate International Academy, nous sommes fiers de
                        notre approche bilingue, combinant une maîtrise
                        approfondie du français, avec un accent aligné sur celui
                        de la France, et le programme complet de Cambridge
                        International pour nos étudiants anglophones. Ce système
                        bilingue garantit que les apprenants ne sont pas
                        seulement compétents dans les deux langues, mais
                        également dotés des compétences intellectuelles les plus
                        élevées requises dans la société mondiale
                        d&apos;aujourd&apos;hui. Notre accréditation avec
                        Cambridge International valide davantage notre
                        engagement à offrir une éducation de classe mondiale,
                        préparant les étudiants à exceller dans leurs futures
                        carrières académiques et professionnelles.
                    </p>
                </div>
            </div>

            {/* Images in grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left image spans 2 rows */}
                <div className="row-span-2">
                    <Image
                        src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/653138b047debdd719b59448_IMG_1878-p-1600.jpg"
                        alt="Teacher and students 1"
                        width={500}
                        height={600}
                        className="rounded-lg object-cover w-full h-full"
                    />
                </div>

                {/* Top-right image */}
                <div>
                    <Image
                        src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/6531391c20a2230e3208829f_IMG_1873-p-1600.jpg"
                        alt="Teacher and students 2"
                        width={500}
                        height={280}
                        className="rounded-lg object-cover w-full h-full"
                    />
                </div>

                {/* Bottom-right image */}
                <div>
                    <Image
                        src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/6531393b7a4c6a31126dec3c_IMG_1803-p-1600.jpg"
                        alt="Reading session"
                        width={500}
                        height={280}
                        className="rounded-lg object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    </section>
);
export default CanadianEducationSection;
