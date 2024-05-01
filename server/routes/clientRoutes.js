import express from "express";
import { getProducts } from "../controllers/clientController.js"
import { getCustomers } from "../controllers/clientController.js"
import { getTransactions } from "../controllers/clientController.js"

const router = express.Router();

router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions)

export default router;