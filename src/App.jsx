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
    <div className="relative w-full">
      <Header />
      <main>
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

export default App;