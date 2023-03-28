import mongoose from "mongoose";

const AvaliacaoSchema = new mongoose.Schema(
  {
    nome: String,
    nota: Number,
    avaliacao: String,
  },
  { collection: "bookInfo" }
);

export default AvaliacaoSchema;
