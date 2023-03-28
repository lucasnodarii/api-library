import bookService from "../services/book.service.js";

const bookController = {
  createBook: async function (req, res, next) {
    try {
      let book = req.body;
      if (!book.name || !book.value || !book.stock || !book.author_id) {
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
        !book.author_id
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
  getAllBooks: async function (req, res, next){
    try{
        res.send(await bookService.getAllBooksService());
    }catch(error){
        next(error);
    }
  },
  getBookById: async function (req, res, next){
    try{
        res.send(await bookService.getBookByIdService(req.params.id));
    }catch(error){
        next(error);
    }
  }
};

export default bookController;
