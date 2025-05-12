import Header from "@/components/atoms/Header";
import UnderHeaderSection from "@/components/atoms/UnderHeaderSection";
import AboutUs from "@/components/atoms/AboutUs";
import Services from "@/components/atoms/Services";
import WhyChooseUsSection from "@/components/atoms/WhyChooseUsSection";
import Footer from "@/components/atoms/Footer";
import OurBlogs from "@/components/atoms/OurBlogs";
import FaqSection from "@/components/atoms/FaqSection";


export default function Home() {
  return (
    <div>
    <Header/>
    <UnderHeaderSection/>
    <AboutUs/>
    <Services/>
    <WhyChooseUsSection/>
    <OurBlogs/>
    <FaqSection/>
    <Footer/>
    </div>
  );
}
