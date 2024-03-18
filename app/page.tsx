import Image from "next/image";
import MenueMobile from "./compont/Menue/MenueMobile";
import Hero from "./compont/Hero/Hero";
import About from "./compont/About/About";
import Sevieve from "./compont/Service/Sevieve";
import Skills from "./compont/Skills/Skills";
import Project from "./compont/Project/Projects";
import Internship from "./compont/Internship/Internship";
import Footer from "./compont/Footer/Footer";

export default function Home() {
  return (
    <div className=" overflow-x-hidden">
      <Hero/>
      <About/>
      <Sevieve/>
      <Skills/>
      <Project/>
      <Internship/>
      <Footer/>
    </div>
    
  );
}
