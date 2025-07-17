import express from "express";

import {
    getAllOrders,
    updateOrderStatus,
    getOrdersByStatus,
} from "../controllers/order.controller.js";
import { adminRoute, protectedRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// order create is in the cart route-> 
router.get("/" , protectedRoute , adminRoute, getAllOrders);  
router.put("/", protectedRoute, updateOrderStatus); // Cancel should be multiwayed and success shoul be admin only 
router.get("/status", protectedRoute, getOrdersByStatus);
// router.put("/:id", protectedRoute, updateQuantity);

// // delete everything in the cart and create an ORDER:-> 
// router.post("/createOrder", protectedRoute, createOrder); 
 

export default router;
  