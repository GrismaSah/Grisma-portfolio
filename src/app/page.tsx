import ClientLayer from "@/components/ClientLayer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Timeline from "@/sections/Timeline";
import DSA from "@/sections/DSA";
import GitHubSection from "@/sections/GitHub";
import Contact from "@/sections/Contact";

/* Thin gradient divider between sections. */
function Divider() {
  return (
    <div className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-line to-transparent" />
  );
}

export default function Home() {
  return (
    <>
      {/* Global client effects: smooth scroll, loader, bg, cursor, progress */}
      <ClientLayer />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Timeline />
        <Divider />
        <DSA />
        <Divider />
        <GitHubSection />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
