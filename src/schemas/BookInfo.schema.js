import mongoose from "mongoose";
import avaliacaoSchema from "./Avalicao.schema.js";

const BookInfoSchema = new mongoose.Schema(
  {
    bookId: Number,
    descricao: String,
    paginas: Number,
    editora: String,
    avaliacoes: [avaliacaoSchema],
  },
  { collection: "bookInfo" }
);

export default BookInfoSchema;
