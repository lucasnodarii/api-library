import saleService from "../services/sale.service.js";

const saleController = {
  createSale: async function (req, res, next) {
    try {
      let sale = req.body;
      if (!sale.date || !sale.clientId || !sale.livroId) {
        throw new Error("Submit all field for registration");
      }
      sale = await saleService.createSaleService(sale);
      res.send(sale);
    } catch (error) {
      next(error);
    }
  },
  getSaleById: async function (req, res, next) {
    try {
      res.send(await saleService.getSaleByIdService(req.params.id));
    } catch (error) {
      next(error);
    }
  },
  getAllSales: async function (req, res, next) {
    try {
      res.send(
        await saleService.getAllSalesService(
          req.query.livroId,
          req.query.authorId,
          req.query.clientId
        )
      );
    } catch (error) {
      next(error);
    }
  },
};

export default saleController;
