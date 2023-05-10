import axios from "axios"

const BASE_API = axios.create({baseURL:"http://localhost:5050/api/v1/" })


async function getNews(){
    try {
        const res = await BASE_API.get("/news/get");
        console.log(res.data)
        
    } catch (error) {
        console.log(error)
    }
}

export {getNews}



