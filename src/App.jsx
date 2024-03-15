import Hero from './components/Hero';
import Highlight from './components/Highlight';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Highlight />
    </div>
  );
}

export default App;
