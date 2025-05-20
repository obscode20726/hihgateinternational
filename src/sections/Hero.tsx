import heroImage from "@/assets/images/heroimage.jpg";

const HERO_STYLES = {
    backgroundImage: `url(${heroImage.src})`,
};

const HERO_CONTENT = {
    title: {
        main: "Take The First",
        highlight: "Step To Learn",
        end: "With Us.",
    },
    subtitle:
        "With the Cambridge Canadian Blended Curriculum, we empower students to be successful in a globalized world through bilingual education.",
    button: {
        text: "Get Started",
        href: "#",
    },
};

export default function Hero() {
    return (
        <section>
            <div className="flex flex-col justify-start items-center w-full max-w-[1392px] mt-52 md:mt-52 mx-auto">
                <div
                    className="w-full h-full flex flex-col bg-[50%_0] xlg:bg-center justify-end md:justify-center items-center md:items-start bg-cover bg-no-repeat min-h-[400px] mb-[440px] md:mb-[85px] md:min-h-[650px] rounded-[30px] shadow-[0_60px_60px_-15px_#1f20221a] md:bg-[50%] "
                    style={HERO_STYLES}
                >
                    <div className="animate-float bg-gradient-to-tr from-[#024059] to-[#00677b] rounded-[30px_30px_360px] w-full md:w-[65%] lg:w-1/2 rounded-br-[140px] md:rounded-br-[260px] -mb-[400px] md:mb-[60px] font-varela leading-[140%] flex flex-col justify-center items-start mt-[60px] py-[50px] px-[30px] lg:py-[100px] lg:px-[70px] ">
                        <span className="text-white uppercase text-xs">
                            welcome
                        </span>
                        <h1 className="text-[34px] md:text-[40px] lg:text-[48px] xlg:text-[50px] max-w-[740px] font-lexend leading-[114%] mt-0 mb-9 font-bold">
                            {HERO_CONTENT.title.main}
                            <br />
                            <span className="text-[#cc7f00]">
                                {HERO_CONTENT.title.highlight}
                            </span>
                            <br />
                            {HERO_CONTENT.title.end}
                        </h1>
                        <p className="text-white max-w-[460px] font-varela leading-[165%] mb-9 text-lg">
                            {HERO_CONTENT.subtitle}
                        </p>
                        <a
                            href={HERO_CONTENT.button.href}
                            className="bg-white text-[#204f58] uppercase rounded-[50px] py-[22px] px-9 text-[13px] font-varela leading-[140%] hover:bg-[#cc7f00] hover:text-white letter-spacing-1-3 transition-colors"
                        >
                            {HERO_CONTENT.button.text}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
