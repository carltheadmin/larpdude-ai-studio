import Header from "./components/Header";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import BrandStatement from "./components/BrandStatement";
import Portfolio from "./components/Portfolio";
import Possibilities from "./components/Possibilities";
import Process from "./components/Process";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Blueprint from "./components/Blueprint";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-void font-body text-body antialiased">
      <Header />
      <main>
        <Hero />
        <Ticker />
        <BrandStatement />
        <Portfolio />
        <Possibilities />
        <Process />
        <Services />
        <Pricing />
        <Blueprint />
        <Contact />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
