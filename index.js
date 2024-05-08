import express from "express"
import router from "./Routes/Router.js";
import cors from "cors"
import { config } from "dotenv";
config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/",router);
app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});