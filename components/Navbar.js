import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export default function Navbar() {
  return (
    <div className="flex-between bg-red-600 px-3 md:px-8 lg:px-10 py-2 ">
      <div>
        <LogoIcon width={110} height={70} color="#f5ddd2" />
      </div>
      <ul className="flex-center">
        <li className="text-cream-400 font-[900] py-[10px] px-4">
          <Link href="#">PRODUCTS</Link>
        </li>
        <li className="text-cream-400 font-[900] py-[10px] px-4">
          <Link href="#">HERITAGE</Link>
        </li>
      </ul>
    </div>
  );
}
