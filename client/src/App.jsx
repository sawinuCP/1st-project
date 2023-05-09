import { useEffect } from "react";
import Navbar from "./components/Navbar";
import NewsCard from "./components/NewsCard";
import "./styles/index.scss";

function App() {

  useEffect(()=>{
    console.info("inside the useeffect")
  }, []);
  
  return (
    <>
    < Navbar/>
    <div>
      < NewsCard newsTitle={"test"} newsDescription={"test description"}/>
    </div>
    
    </>
  )
}

export default App
