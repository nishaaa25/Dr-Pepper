import Image from "next/image";
import asset0 from "../app/assets/asset 0.png";

export default function HeroComponent() {
  return (
    <div className="container bg-red-700 min-h-[90vh] ">
      <div className="relative w-full">
        <p className="heading-text pl-[74px]">TREAT</p>
        <p className="heading-text">YOURSELF </p>
        <div className="flex items-start gap-10">
          <span className="text-3xl pl-[146px] font-[900] text-cream-400 pt-1">TO</span>
          <p className="heading-text"> MOOORE</p>
        </div>
        <p className="heading-text">WITH DR PEPPER</p>
      </div>
      <div className="absolute top-10 right-20">
        <Image src={asset0} alt="pepper-can-img1" width={260}/>
      </div>
    </div>
  );
}
