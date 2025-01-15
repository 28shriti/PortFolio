import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Blog from "./components/Blogs";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
