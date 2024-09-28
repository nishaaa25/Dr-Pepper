import AboutComponent from "@/components/AboutComponent";
import HeroComponent from "@/components/HeroComponent";
import ProductComponent from "@/components/ProductComponent";

export default function Home() {
  return (
    <div className="home w-screen">
      <HeroComponent/>
      <AboutComponent/>
      <ProductComponent/>
    </div>
  );
}
