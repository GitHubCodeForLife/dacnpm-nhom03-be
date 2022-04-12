import express from "express";
const router = express.Router();
import ProductController from "./productController";
import { authenticateByJwt } from "../auth/auth.services";

router.get("/", authenticateByJwt, ProductController.getAll);
router.get("/test", authenticateByJwt, ProductController.test);
router.get("/:id", authenticateByJwt, ProductController.get);
router.post("/", authenticateByJwt, ProductController.insert);
router.put("/:id", authenticateByJwt, ProductController.update);
router.delete("/:id", ProductController.delete);

export default router;
