import express from "express"
import shopping from "../controllers/shopping.js";

const router = express.Router();

router.post("/orders",shopping); 
export default router;