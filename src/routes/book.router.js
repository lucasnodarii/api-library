import express from "express";
import bookController from "../controllers/book.controller.js";

const router = express.Router();

router.post("/", bookController.createBook);
router.put("/", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);
router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBookById);

export default router;