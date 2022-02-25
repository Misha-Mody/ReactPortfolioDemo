import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="container">
        <About />

        <Projects title="Academic" />
        <Projects title="Personal" />
      </div>
    </div>
  );
}

export default App;