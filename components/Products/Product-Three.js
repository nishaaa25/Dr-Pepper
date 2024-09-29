import Image from "next/image";
import asset2 from "../../app/assets/asset 2.png";
import RightArrowIcon from "../IconComponents/RightArrowIcon";

export default function ProductThree() {
  return (
    <div className="container h-screen overflow-hidden bg-cream-400 text-red-600 flex pt-[132px] px-[40px]">
      <div className="relative w-full">
        <div className="flex flex-wrap gap-[10px] w-[70%] relative">
          <p className="heading2-text">It&apos;s </p>
          <p className="heading2-text">so </p>
          <p className="heading2-text">ridiculous, </p>
          <p className="outline-text text-xxl font-[900] uppercase">It&apos;s </p>
          <p className="outline-text text-xxl font-[900] uppercase">ridonculous. </p>
        </div>
        <p className="text-xl uppercase font-bold w-[38%] pt-7">
        Dr Pepper & Cream Soda. You thought we’d stop at 23 flavours? Drink again!
        </p>
      </div>
      <div className="absolute bottom-[10%] left-[30%] inline-block uppercase rounded-[100%] border border-red-600 px-10 py-20 transform rotate-[-14deg]">
        <div className="flex justify-center items-center gap-2">
          <p className="font-[900] text-2xl text-center">
            Get ridonculous
          </p>
          <RightArrowIcon width={40} height={40} color="#951c2f" />
        </div>
      </div>
      <div>
        <Image src={asset2} alt="peppercan" width={200} />
      </div>
    </div>
  );
}
