import NavBar from "@/components/NavBar";
import ProductHero from "@/components/productHero";
import Footer from "@/components/Footer";
import Waitlist from "@/components/Wailtlist";

export default function ProductPage() {
  return (
    <div className="bg-white">
      <NavBar />
      <ProductHero />
      <Waitlist />
      <Footer />
    </div>
  );
}

