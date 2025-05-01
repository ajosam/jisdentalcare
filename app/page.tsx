import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 gap-16  font-[family-name:var(--font-geist-sans)]">
  <Header />
  {/* Main content */}
  <section className="p-4 flex-1">
    <h1 className="text-3xl font-bold">Welcome to JIS Dental Care</h1>
    <p className="mt-2 text-gray-600">Your smile, our passion.</p>
  </section>
  {/* Optional footer can go here */}
</div>

  );
}
