import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlight from './components/Highlight';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Highlight />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
