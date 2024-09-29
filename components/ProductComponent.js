import ProductOne from "./Products/Product-One";
import ProductThree from "./Products/Product-Three";
import ProductTwo from "./Products/Product-Two";

export default function ProductComponent() {
  return (
    <div>
      <ProductOne />
      <div className="relative flex overflow-x-hidden text-black border-y border-cream-400 bg-gradient-to-b from-[#BB2033] to-red-600">
        <div class="py-10 animate-marquee whitespace-nowrap">
          <span class="heading2-creamtext mx-2">More is More.</span>
          <span class="heading2-creamtext mx-2">More is More.</span>
          <span class="heading2-creamtext mx-2">More is More.</span>
          <span class="heading2-creamtext mx-2">More is More.</span>
        </div>
        <div class="absolute top-0 py-10 animate-marquee2 whitespace-nowrap">
          <span class="heading2-creamtext mx-2">More is More.</span>
          <span class="heading2-creamtext mx-2">More is More.</span>
          <span class="heading2-creamtext mx-2">More is More.</span>
          <span class="heading2-creamtext mx-2">More is More.</span>
        </div>
      </div>
      <div className="relative flex overflow-x-hidden text-black border-y border-cream-400 bg-gradient-to-b from-[#BB2033] to-red-600">
        <div class="py-10 animate-marquee3 whitespace-nowrap">
          <span class="heading2-creamtext mx-2">Are you hypnotized yet?</span>
          <span class="heading2-creamtext mx-2">More is More.</span>
          <span class="heading2-creamtext mx-2">More is More.</span>
        </div>
        <div class="absolute top-0 py-10 animate-marquee4 whitespace-nowrap">
          <span class="heading2-creamtext mx-2">Are you hypnotized yet?</span>
          <span class="heading2-creamtext mx-2">More is More.</span>
          <span class="heading2-creamtext mx-2">More is More.</span>
        </div>
      </div>
      <div className="relative flex overflow-x-hidden text-black border-y border-cream-400 bg-gradient-to-b from-[#BB2033] to-red-600">
        <div class="py-10 animate-marquee whitespace-nowrap">
          <span class="heading2-creamtext mx-2">More is More.</span>
          <span class="heading2-creamtext mx-2">More is More.</span>
          <span class="heading2-creamtext mx-2">More is More.</span>
          <span class="heading2-creamtext mx-2">More is More.</span>
        </div>
        <div class="absolute top-0 py-10 animate-marquee2 whitespace-nowrap">
          <span class="heading2-creamtext mx-2">More is More.</span>
          <span class="heading2-creamtext mx-2">More is More.</span>
          <span class="heading2-creamtext mx-2">More is More.</span>
          <span class="heading2-creamtext mx-2">More is More.</span>
        </div>
      </div>
      <ProductTwo />
      <ProductThree />
      <div className="relative flex-between gap-6 text-cream-400 border-y border-cream-400 bg-gradient-to-b py-8 from-[#BB2033] to-red-600 text-nowrap overflow-x-scroll pr-3">
        <p className="px-10 uppercase text-xxxl font-[900]">
          What are the 23 flavours in
          <span className="outline-text-2 ml-8">dr pepper?</span>
        </p>
        <div className="relative right-[0%] inline-block  rounded-[100%] border border-cream-400 px-[60px] py-10 transform rotate-[-14deg]">
          <p className="font-[900] text-lg text-center uppercase">Tell me <br/> more</p>
        </div>
      </div>
    </div>
  );
}
