require("dotenv").config();
const express = require("express");
const bodyPaser = require("body-parser");
const cors = require("cors");
const router = require("./routes/_index.routes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors({origin:"*"}))

app.use("/api/v1/" , router);

app.get("/test" , (req,res)=>{
    res.send("Test OK from server")
});


app.listen(PORT,()=>{
    console.log("server run on port " + PORT);
});



