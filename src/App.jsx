import { useState } from "react";
import { LoadingScreen } from "./components";


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
   {!isLoaded && < LoadingScreen onComplete={()=> setIsLoaded(true) }/>} 
   <div>
    <h1>Portfolio</h1>
  </div> 

    </>
  );
}

export default App;
