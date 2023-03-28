import express from "express";
import bookController from "../controllers/book.controller.js";

const router = express.Router();

router.post("/", bookController.createBook);
router.put("/", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);
router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBookById);

router.post("/info", bookController.createBookInfo);
router.put("/info", bookController.updateBookInfo);
router.delete("/info/:id", bookController.deleteBookInfo);
router.get("/info/:id", bookController.getBookInfo);

router.post("/:id/avaliacao", bookController.createAvaliacao);
router.delete("/:id/avaliacao/:index", bookController.deleteAvaliacao);

export default router;