import Image from "next/image";
import asset0 from "../../app/assets/asset 0.png";
import RightArrowIcon from "../IconComponents/RightArrowIcon";

export default function ProductOne() {
  return (
    <div className="container h-screen overflow-hidden bg-red-800 text-cream-400 flex pt-[132px] px-[40px]">
      <div className="relative w-full">
        <div className="flex flex-wrap gap-[10px] w-[51%] relative">
          <p className="heading2-creamtext">If </p>
          <p className="heading2-creamtext pr-6">something </p>
          <p className="heading2-creamtext">is </p>
          <p className="heading2-creamtext">worth </p>
          <p className="heading2-creamtext">doing,</p>
          <p className="heading2-creamtext">It&apos;s </p>
          <p className="heading2-creamtext">Worth </p>
          <p className="outline-text-2 text-xxl font-[900] uppercase">
            Overdoing
          </p>
        </div>
        <p className="text-xl uppercase font-bold w-[40%] pt-7">
          The original Dr Pepper has always been extra.
        </p>
      </div>
      <div className="absolute bottom-[10%] left-[32%] inline-block uppercase rounded-[100%] border border-cream-400 px-10 py-20 transform rotate-[-14deg]">
        <div className="flex justify-center items-center gap-2">
          <p className="font-[900] text-2xl">
            Sip Some <br />
            Flavour
          </p>
          <RightArrowIcon width={40} height={40} color="#f5ddd2" />
        </div>
      </div>
      <div>
        <Image src={asset0} alt="peppercan" width={200} />
      </div>
    </div>
  );
}
