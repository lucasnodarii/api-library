import Sale from "../models/Sale.model.js";
import Book from "../models/Book.model.js";
import Author from "../models/Author.model.js";
import Client from "../models/Client.model.js";

const saleService = {
  createSaleService: async function (sale) {
    try {
      let value = await Book.findByPk(sale.livroId);
      sale.value = value.value;

      return await Sale.create(sale);
    } catch (error) {
      throw error;
    }
  },
  getSaleByIdService: async function (id) {
    try {
      return await Sale.findByPk(id);
    } catch (error) {
      throw error;
    }
  },
  getAllSalesService: async function (livroId, authorId, clientId) {
    try {
      if (livroId) {
        return await Sale.findAll({
          include: [
            {
              model: Book,
              where: { livroId },
            },
          ],
        });
      }
      if (authorId) {
        return await Sale.findAll({
          include: [
            {
              model: Author,
              where: { authorId },
            },
          ],
        });
      }
      if (clientId) {
        return await Sale.findAll({
          include: [
            {
              model: Client,
              where: { clientId },
            },
          ],
        });
      }
      return await Sale.findAll();
    } catch (error) {
      throw error;
    }
  },
};

export default saleService;
