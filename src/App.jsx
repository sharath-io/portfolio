import { useState } from "react";
import { About, Home, LoadingScreen } from "./components";
import { Projects } from "./components/sections/Projects";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transtion-opacity duration-700
       ${isLoaded ? "opacity-100" : "opacity-0"}
       bg-black text-gray-100`}
      >
        <Home/>
        <About/>
        <Projects/>
      </div>
    </>
  );
}

export default App;
