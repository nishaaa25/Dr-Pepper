import AboutComponent from "@/components/AboutComponent";
import HeroComponent from "@/components/HeroComponent";

export default function Home() {
  return (
    <div className="home w-screen">
      <HeroComponent/>
      <AboutComponent/>
    </div>
  );
}
