import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import { SocialLinks } from "./components/SocialLinks";
import Contact from "./components/Contact";
import ThemeProvider from "./components/ThemeProvider";
import Head from "./components/Head";

function App() {
  return (
    <div>
      <ThemeProvider>
        <Head />
        <NavBar />
        <Home />
        <About />
        <Portfolio />
        <Experience />

        <SocialLinks />
        <Contact />
      </ThemeProvider>
    </div>
  );
}

export default App;
