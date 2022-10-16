import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <main className="text-gray-400 bg-stone-900 body-font">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Experiences />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
