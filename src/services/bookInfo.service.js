import connect from "../database/mongo.db.js";
import BookInfoSchema from "../schemas/BookInfo.schema.js";

const bookInfoService = {
  createBookInfoService: async function (bookInfo) {
    try {
      const mongoose = await connect();
      const BookInfo = mongoose.model("BookInfo", BookInfoSchema);
      bookInfo = new BookInfo(bookInfo);
      await bookInfo.save();
    } catch (error) {
      throw error;
    }
  },
  updateBookInfoService: async function (bookInfo) {
    try {
      const mongoose = await connect();
      const BookInfo = mongoose.model("BookInfo", BookInfoSchema);
      await BookInfo.findOneAndUpdate({ bookId: bookInfo.bookId }, bookInfo);
    } catch (error) {
      throw error;
    }
  },
  deleteBookInfoService: async function (bookId) {
    try {
      const mongoose = await connect();
      const BookInfo = mongoose.model("BookInfo", BookInfoSchema);
      await BookInfo.deleteOne({ bookId });
    } catch (error) {
      throw error;
    }
  },
  getBookInfoService: async function (bookId) {
    try {
      const mongoose = await connect();
      const BookInfo = mongoose.model("BookInfo", BookInfoSchema);
      return await BookInfo.findOne({ bookId }).exec();
    } catch (error) {
      throw error;
    }
  },
  createAvaliacaoService: async function (avaliacao, bookId) {
    try {
      const bookInfo = await bookInfoService.getBookInfoService(bookId);
      bookInfo.avaliacoes.push(avaliacao);
      await bookInfoService.updateBookInfoService(bookInfo);
    } catch (error) {
      throw error;
    }
  },
  deleteAvaliacaoService: async function (bookId, index) {
    try {
      const bookInfo = await bookInfoService.getBookInfoService(bookId);
      bookInfo.avaliacoes.splice(index, 1);
      await bookInfoService.updateBookInfoService(bookInfo);
    } catch (error) {
      throw error;
    }
  },
};

export default bookInfoService;
