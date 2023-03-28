import Sequelize from "sequelize";
import db from "../database/db.js";
import Author from "./Author.model.js";

const Book = db.define(
  "books",
  {
    livroId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    value: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    stock: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { underscored: true }
);

Book.belongsTo(Author, { foreignKey: "authorId" });

export default Book;
