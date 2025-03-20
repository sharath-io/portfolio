import { useState } from "react";
import { About, Home, LoadingScreen } from "./components";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Navbar } from "./components/sections/Navbar";
import { MobileMenu } from "./components/sections/MobileMenu";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transtion-opacity duration-700
       ${isLoaded ? "opacity-100" : "opacity-0"}
       bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
