import Image from "next/image";
import asset1 from "../../app/assets/asset 1.png";
import RightArrowIcon from "../IconComponents/RightArrowIcon";

export default function ProductTwo() {
  return (
    <div className="container h-screen flex pt-[132px] px-[40px] overflow-hidden text-cream-400 bg-gradient-to-b from-black from-[60%] to-red-600">
      <div className="relative">
        <Image src={asset1} alt="peppercan" width={200} />
      </div>
      <div className="absolute bottom-[10%] right-[32%] inline-block uppercase rounded-[100%] border border-cream-400 px-10 py-20 transform rotate-[13deg]">
        <div className="flex justify-center items-center gap-2">
          <p className="font-[900] text-2xl text-center">
            Grab one <br />
            today
          </p>
          <RightArrowIcon width={40} height={40} color="#f5ddd2" />
        </div>
      </div>
      <div className="relative w-full flex justify-end items-start">
        <div className="flex flex-col items-end">
          <div className="flex flex-wrap justify-end gap-[10px]  w-[45%]">
            <p className="heading2-creamtext">It&apos;s </p>
            <p className="heading2-creamtext">Super. </p>
            <p className="heading2-creamtext ml-28">It&apos;s </p>
            <p className="heading2-creamtext">Zero.</p>
            <p className="heading2-creamtext">It&apos;s </p>
            <p className="heading2-creamtext">a </p>
            <p className="heading2-creamtext">freakin&apos; </p>
            <p className="outline-text-2 text-xxl font-[900] uppercase">
              superzero
            </p>
          </div>
          <p className="text-xl uppercase font-bold w-[40%] pt-7 text-right">
          Zero-sugar sodas have finally met their match.

          </p>
        </div>
      </div>
    </div>
  );
}
