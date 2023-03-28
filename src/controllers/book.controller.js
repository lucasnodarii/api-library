import bookService from "../services/book.service.js";
import bookInfoService from "../services/bookInfo.service.js";

const bookController = {
  createBook: async function (req, res, next) {
    try {
      let book = req.body;
      if (!book.name || !book.value || !book.stock || !book.authorId) {
        throw new Error("Submit all fields for registration");
      }
      book = await bookService.createBookService(book);
      res.send(book);
    } catch (error) {
      next(error);
    }
  },
  updateBook: async function (req, res, next) {
    try {
      let book = req.body;
      if (
        !book.bookId ||
        !book.name ||
        !book.value ||
        !book.stock ||
        !book.authorId
      ) {
        throw new Error("Submit all fields for registration");
      }
      book = await bookService.updateBookService(book);
      res.send(book);
    } catch (error) {
      next(error);
    }
  },
  deleteBook: async function (req, res, next) {
    try {
      await bookService.deleteBookService(req.params.id);
      res.send("Book sucessfully deleted");
    } catch (error) {
      next(error);
    }
  },
  getAllBooks: async function (req, res, next) {
    try {
      res.send(await bookService.getAllBooksService(req.query.authorId));
    } catch (error) {
      next(error);
    }
  },
  getBookById: async function (req, res, next) {
    try {
      res.send(await bookService.getBookByIdService(req.params.id));
    } catch (error) {
      next(error);
    }
  },
  createBookInfo: async function (req, res, next) {
    try {
      let bookInfo = req.body;
      if (!bookInfo.bookId) {
        throw new Error("BookId is obrigatory");
      }
      await bookInfoService.createBookInfoService(bookInfo);
      res.send("Book info sucessfully created");
    } catch (error) {
      next(error);
    }
  },
  updateBookInfo: async function (req, res, next) {
    try {
      let bookInfo = req.body;
      if (!bookInfo.bookId) {
        throw new Error("BookId is obrigatory");
      }
      await bookInfoService.updateBookInfoService(bookInfo);
      res.send("Book info sucessfully updated");
    } catch (error) {
      next(error);
    }
  },
  deleteBookInfo: async function (req, res, next) {
    try {
      await bookInfoService.deleteBookInfoService(parseInt(req.params.id));
      res.send("Book info sucessfully deleted");
    } catch (error) {
      next(error);
    }
  },
  getBookInfo: async function (req, res, next) {
    try {
      res.send(await bookInfoService.getBookInfoService(req.params.id));
    } catch (error) {
      next(error);
    }
  },
  createAvaliacao: async function (req, res, next) {
    try {
      let avaliacao = req.body;
      let bookId = req.params.id;
      if (!avaliacao || !bookId) {
        throw new Error("Avaliacao e bookId are obrigatories");
      }
      await bookInfoService.createAvaliacaoService(avaliacao, bookId);
      res.send("Avaliação sucessfully created");
    } catch (error) {
      next(error);
    }
  },
  deleteAvaliacao: async function (req, res, next) {
    try {
      await bookInfoService.deleteAvaliacaoService(
        parseInt(req.params.id),
        req.params.index
      );
      res.send("Avaliacao sucessfully deleted");
    } catch (error) {
      next(error);
    }
  },
};

export default bookController;
