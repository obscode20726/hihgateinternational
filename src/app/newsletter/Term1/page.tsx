import NewsletterHeader from "../../../components/Y1/Term1/NewsletterHeader";
import SectionLogo from "@/components/Y1/Term1/SectionLogo";
import NewsletterPage from "@/components/Y1/Term1/Section1";
import Navbar from "@/sections/Navbar";
import { LanguageProvider } from "@/app/Context/LanguageContext";
import NewsletterSection2 from "@/components/Y1/Term1/Section2";
import NewsletterSection3 from "@/components/Y1/Term1/section3";
import NewsletterSection4_1 from "@/components/Y1/Term1/Section4_1";
import NewsletterSection4_2 from "@/components/Y1/Term1/Section4_2";
import Footer from "@/sections/Footer";
import NewsletterSection5_3 from "@/components/Y1/Term1/Section5_3";
import NewsletterSection5_1 from "@/components/Y1/Term1/Section5_1";
import NewsletterSection5_4 from "@/components/Y1/Term1/Section5_4";
import NewsletterSection5_2 from "@/components/Y1/Term1/Section5_2";
import NewsletterSection5_5 from "@/components/Y1/Term1/Section5_5";
import NewsletterSection5_6 from "@/components/Y1/Term1/Section5_6";
import NewsletterSection5_7 from "@/components/Y1/Term1/Section5_7";
import NewsletterSection5_8 from "@/components/Y1/Term1/Section5_8";

export default function Newsletter() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-white text-gray-800">
                <LanguageProvider>
                    <NewsletterHeader />
                    <SectionLogo />
                    <NewsletterPage />
                    <NewsletterSection2 />
                    <NewsletterSection3 />
                    <NewsletterSection4_1 />
                    <NewsletterSection4_2 />
                    <NewsletterSection5_1 />
                    <NewsletterSection5_2 />
                    <NewsletterSection5_3 />
                    <NewsletterSection5_4 />
                    <NewsletterSection5_5 />
                    <NewsletterSection5_6 />
                    <NewsletterSection5_7 />
                    <NewsletterSection5_8 />
                </LanguageProvider>
            </div>
            <Footer />
        </>
    );
}
