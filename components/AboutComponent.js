import Image from "next/image";
import asset0 from "../app/assets/asset 0.png";

export default function AboutComponent() {
  const numberOfImages = 10;

  return (
    <div className="max-w-screen h-screen overflow-hidden relative bg-cream-400 flex justify-center items-center">
      <div className="transform rotate-[-14deg] scale-[1.2] translate-x-20">
        <div className="flex gap-6">
          {Array.from({ length: numberOfImages }).map((_, index) => (
            <Image
              key={index}
              src={asset0}
              width={140}
              alt="pepper-can-1"
              className={`${index % 2 === 0 ? "opacity-0" : ""}`}
            />
          ))}
        </div>
        <div className="flex gap-6 mt-6">
          {Array.from({ length: numberOfImages }).map((_, index) => (
            <Image
              key={index}
              src={asset0}
              width={140}
              alt="pepper-can-1"
              className={`${index % 2 !== 0 ? "opacity-0" : ""}`}
            />
          ))}
        </div>
        <div className="flex gap-6 mt-6">
          {Array.from({ length: numberOfImages }).map((_, index) => (
            <Image
              key={index}
              src={asset0}
              width={140}
              alt="pepper-can-1"
              className={`${index % 2 === 0 ? "opacity-0" : ""}`}
            />
          ))}
        </div>
      </div>
      <div className="hidden flex-wrap justify-center gap-4 w-[45%] text-center relative">
        <p className="heading2-text">A </p>
        <p className="heading2-text">unique </p>
        <p className="heading2-text">blend </p>
        <p className="heading2-text">of </p>
        <p className="heading2-text">23 </p>
        <p className="heading2-text">flavours. </p>
        <p className="heading2-text">Because </p>
        <p className="heading2-text">less </p>
        <p className="heading2-text">isn’t </p>
        <p className="heading2-text">more. </p>
        <p className="outline-text text-xxl font-[900] uppercase">More </p>
        <p className="heading2-text">is </p>
        <p className="heading2-text">more. </p>
      </div>
    </div>
  );
}
