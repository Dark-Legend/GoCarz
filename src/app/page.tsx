import { Feature } from "@/components/Feature/Feature";
import { Footer } from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";
import { Make } from "@/components/Make/Make";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <section>
      <Hero />
      <Feature />
      <Make />
      <WhyChooseUs />
      <Footer />
    </section>
  );
}
