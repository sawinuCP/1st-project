const axios  = require("axios");
const API_KEY = process.env.API_KEY

const getNews = async (req,res) => {
   try {
     const axiosRes = await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2023-04-09&sortBy=publishedAt&apiKey=${API_KEY}&pageSize=1`);
     console.log(axiosRes);
     res.status(200).json(axiosRes.data);
   } catch (error) {
     res.status(400).json({eror:"an error occured"});
    
   }
}


module.exports={getNews}; 