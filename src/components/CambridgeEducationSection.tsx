import Image from "next/image";
const CambridgeEducationSection = () => (
    <section className="bg-white ">
        <div></div>

        <div className="px-6 max-w-7xl mx-auto bg-white py-10 text-gray-800">
            {/* Header */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#cc7f00] mb-6 font-lexend">
                Cambridge Assessment International Education
            </h1>

            {/* Two-column grid */}
            <div className="grid lg:grid-cols-2 gap-10 mb-12">
                <div className="space-y-4 text-justify font-lexend">
                    <p>
                        High Gate International Academy prepares students for
                        global success with a curriculum recognized worldwide,
                        emphasizing rigorous academic standards and
                        international-mindedness. Our program is renowned for
                        its focus on developing critical thinking,
                        problem-solving, and independent research skills.
                        Lessons are meticulously prepared and delivered
                        following the Cambridge learner and teacher attributes,
                        ensuring high educational quality. Our learners
                        demonstrate a commitment to collaboration, high academic
                        performance, and proficiency in both French and English,
                        fostering a truly bilingual learning environment.
                    </p>
                    <p>
                        Students at High Gate cultivate self-discipline,
                        environmental consciousness, creativity, and computer
                        literacy in our state-of-the-art smart classrooms. We
                        emphasize the authenticity of national values, preparing
                        students to become responsible and informed future
                        leaders. Our holistic approach to education ensures that
                        learners not only excel academically but also develop
                        essential life skills and a deep sense of global
                        citizenship. High Gate International Academy stands as a
                        beacon of excellence, dedicated to nurturing the leaders
                        of tomorrow.
                    </p>
                </div>

                <div className="space-y-4 text-justify font-lexend">
                    <p>
                        High Gate International Academy prépare les apprenants à
                        réussir à l&apos;échelle mondiale avec un programme
                        reconnu dans le monde entier, mettant l&apos;accent sur
                        des normes académiques rigoureuses et une ouverture sur
                        l&apos;international. Notre programme est réputé pour
                        son accent sur le développement de la pensée critique,
                        la résolution de problèmes et la recherche indépendante.
                        Les leçons sont soigneusement préparées et dispensées
                        selon les attributs des apprenants et enseignants
                        Cambridge, garantissant une haute qualité éducative. Nos
                        élèves démontrent un engagement envers la collaboration,
                        une performance académique élevée et une maîtrise du
                        français et de l&apos;anglais, favorisant un
                        environnement d&apos;apprentissage véritablement
                        bilingue.
                    </p>
                    <p>
                        Les élèves de High Gate cultivent l&apos;autodiscipline,
                        la conscience environnementale, la créativité et les
                        compétences informatiques dans nos salles de classe
                        intelligentes à la pointe de la technologie. Nous
                        mettons l&apos;accent sur l&apos;authenticité des
                        valeurs nationales, préparant les élèves à devenir des
                        leaders responsables et informés de demain. Notre
                        approche holistique de l&apos;éducation garantit que les
                        apprenants excellent non seulement sur le plan
                        académique mais développent également des compétences
                        essentielles pour la vie et un profond sens de la
                        citoyenneté mondiale. High Gate International Academy se
                        distingue comme un phare d&apos;excellence, dédiée à
                        former les leaders de demain.
                    </p>
                </div>
            </div>

            {/* Images in grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-6">
                {/* First image */}
                <div className="overflow-hidden aspect-[5/9] md:col-span-1">
                    <Image
                        src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/6531407dc1c74bb533c7cfcd_IMG_0911-p-1080.jpg"
                        alt="Teacher and students 1"
                        width={350}
                        height={450}
                        className="rounded-lg object-cover w-full h-full"
                    />
                </div>

                {/* Middle (bigger) image */}
                <div className="overflow-hidden aspect-[9/10] md:col-span-2">
                    <Image
                        src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/65314046e943130bf7a2e848_IMG_1771-p-1080.jpg"
                        alt="Teacher and students 2"
                        width={700}
                        height={700}
                        className="rounded-lg object-cover w-full h-full"
                    />
                </div>

                {/* Third image */}
                <div className="overflow-hidden aspect-[5/9] md:col-span-1">
                    <Image
                        src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/65314098f8b5af1727a1dad7_IMG_0947-p-1080.jpg"
                        alt="Reading session"
                        width={350}
                        height={450}
                        className="rounded-lg object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    </section>
);
export default CambridgeEducationSection;
