import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Testimonials from "@/components/landing/Testimonials";
import Services from "@/components/landing/Services";
import Process from "@/components/landing/Process";
import IntakeForm from "@/components/landing/IntakeForm";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAF7] text-slate-800 antialiased selection:bg-emerald-500/20 font-body">
      <Navbar />
      <main>
        <Hero />
        <Testimonials />
        <Services />
        <Process />
        <IntakeForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
