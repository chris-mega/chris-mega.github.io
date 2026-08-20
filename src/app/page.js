import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Competitions from "./components/Competitions";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <About />
      <Skills />
      <Experience />
      <Competitions />
      <Portfolio />
    </div>
  );
}
