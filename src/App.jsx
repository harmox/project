import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Landing from './components/Landing';
import CyberSecurity from './components/CyberSecurity';

function App() {


  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Skills />
        
        <Landing />
        <Hero />
        <Projects />
        <CyberSecurity />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} Harmox</p>
        </div>
      </footer>
    </div>
  );
}

export default App;