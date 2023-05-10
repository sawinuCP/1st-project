import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import NewsCard from "./components/NewsCard";
import "./styles/index.scss";
import { getNews } from "./utils/api";

function App() {

  const[changer , setChanger] = useState(true);

  useEffect(()=>{
    async function getData(){
      await getNews();
    }

    getData();
    // console.info("inside the useeffect")
  }, []);
  
  return (
    <>
    < Navbar/>

    <button onClick={()=>{setChanger(false)}}></button>
    <div>
      < NewsCard newsTitle={"test"} newsDescription={"test description"}/>
    </div>
    
    </>
  )
}

export default App
