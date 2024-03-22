const express =require("express");
const cors = require("cors");
const dotenv = require("dotenv");

//dotenv configuartion
dotenv.config();

//rest object

const app = express();

//midlewares

app.use(cors());
app.use(express.json());
// static file
app.use(express.static(path.join(__dirname,'./my-app/build')))
//routes
app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,'./my-app/build/index.html'))
});
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

//port

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server Runnning On PORT ${PORT} `);
});
