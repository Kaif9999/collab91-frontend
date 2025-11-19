import NavBar from "@/components/NavBar";
import HeroHome from "@/components/HeroHome";
import OurBusiness from "@/components/ourBusiness";
import OurServices from "@/components/ourServices";
import OurStrengths from "@/components/ourStrengths";
import ContactUs from "@/components/contactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (    
    <div className="bg-white">
      <div className="mb-18">
        <NavBar />
      </div>
      <HeroHome />
      <OurBusiness />
      <OurServices/>
      <OurStrengths />
      <ContactUs />
      <Footer />
     
    </div>
  );
}
