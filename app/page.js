import LogoIcon from "@/components/LogoIcon";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <LogoIcon width={140} height={140} color="#f5ddd2"/>
      <p>Hey</p>
    </div>
  );
}
