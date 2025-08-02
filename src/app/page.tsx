import Header from "@/components/lander/header";
import Hero from "@/components/lander/hero";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="pt-24">
        <div className="max-w-6xl mx-auto px-8">
          <Hero />
        </div>
      </div>
    </div>
  );
}
