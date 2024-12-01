import express, { json, urlencoded } from "express"
import dotenv from "dotenv";
import MainRouter from "./routes/index.js";
import { initMongoDB } from "./db/dbConfig.js";
dotenv.config();
const mainRouter= new MainRouter();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', mainRouter.getRouter());


initMongoDB()
  .then(() => console.log("Base de datos conectada"))
  .catch((error) => console.log(error));

const PORT= process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`)
})