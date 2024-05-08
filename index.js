import app from "./app.js";
import { config } from "dotenv";
config();
app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});