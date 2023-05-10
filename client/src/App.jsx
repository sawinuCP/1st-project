import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import NewsCard from "./components/NewsCard";
import "./styles/index.scss";
import { getNews } from "./utils/api";

function App() {

  const [newslist , setnewsList] = useState([])
  const [error , seterror] = useState("")

  useEffect(()=>{
    async function getData(){
      const res = await getNews();

      if(res.error){
        seterror(res.data)
      }else{
        setnewsList(res.data)
      }
    }

    getData();
    // console.info("inside the useeffect")
  }, []);
  
  return (
    <>
    < Navbar/>
    <p>{error}</p>
    <button onClick={()=>{setChanger(false)}}></button>
    <div>
      {newslist && newslist.map((element)=>{
        < NewsCard newsTitle={element.title}
        newsDescription={element.description}
        imgURL={element.urlToImage}
        />
      })}
      
    </div>
    
    </>
  )
}

export default App
