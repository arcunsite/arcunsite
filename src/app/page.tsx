import Header from "@/components/lander/header";
import Hero from "@/components/lander/hero";
import TechStack from "@/components/lander/tech-stack";
import ProcessPreview from "@/components/lander/process-preview";
import FeatureCards from "@/components/lander/feature-cards";
import Footer from "@/components/lander/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="pt-18 pb-18">
        <div className="max-w-6xl mx-auto px-8">
          <div className="p-2 border border-neutral-900 rounded-2xl space-y-2">
            <div>
              <Hero />
            </div>
            <div className="p-8 border border-neutral-900 rounded-2xl">
              <ProcessPreview />
            </div>
            <div className="p-8 border border-neutral-900 rounded-2xl">
              <TechStack />
            </div>
            <div className="p-8 border border-neutral-900 rounded-2xl">
              <FeatureCards />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
