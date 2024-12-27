import { BrowserRouter } from "react-router-dom";

import {
  Hero,
  Navbar,
  About,
  StarsCanvas,
  Hobbies,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className=" relative z-0 bg-black">
        <div className=" relative z-0">
          <Navbar />
          <Hero />
          <StarsCanvas/>
        </div>
        
        <div className=" relative z-0">
        <hr className=" h-[2px] mx-6  bg-  border-0 rounded-xl "/>
        <About />
        <StarsCanvas/> 
        </div>
        <div className=" relative z-0">
        <Hobbies/>
        <StarsCanvas/> 
        </div>
      </div>
      
    </BrowserRouter>
  );
};

export default App;
