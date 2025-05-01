import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pb-10 gap-1  font-[family-name:var(--font-geist-sans)]">
  <Header />
  <Hero />
  {/* Optional footer can go here */}
</div>

  );
}
