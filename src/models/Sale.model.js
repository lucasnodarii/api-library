import Sequelize from "sequelize";
import db from "../database/db.js";
import Client from "./Client.model.js";
import Book from "./Book.model.js";

const Sale = db.define(
  "sales",
  {
    saleId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    value: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    date: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

Sale.belongsTo(Client, { foreignKey: "clientId" });
Sale.belongsTo(Book, { foreignKey: "livroId" });

export default Sale;
