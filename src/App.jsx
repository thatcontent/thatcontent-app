import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import Problem from './sections/Problem';
import Differentiation from './sections/Differentiation';
import ContentServices from './sections/ContentServices';
import ITSolutions from './sections/ITSolutions';
import GrowthFrameworks from './sections/GrowthFrameworks';
import Pricing from './sections/Pricing';
import WhyThatContent from './sections/WhyThatContent';
import FreeAudit from './sections/FreeAudit';

function App() {
  return (
    // Update this top-level div
    <div className="relative w-full max-w-[100vw] overflow-x-hidden bg-[#07070A]">
      <Header />
      <main className="w-full">
        <Hero />
        <Problem />
        <Differentiation />
        <ContentServices />
        <ITSolutions />
        <GrowthFrameworks />
        <Pricing />
        <WhyThatContent />
        <FreeAudit />
      </main>
      <Footer />
    </div>
  );
}