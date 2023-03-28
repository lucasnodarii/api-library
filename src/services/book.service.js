import Book from "../models/Book.model.js";
import Author from "../models/Author.model.js";

const bookService = {
  createBookService: async function (book) {
    try {
      return await Book.create(book);
    } catch (error) {
      throw error;
    }
  },
  updateBookService: async function (book) {
    try {
      await Book.update(book, {
        where: {
          livro_id: book.bookId,
        },
      });
      return await bookService.getBookByIdService(book.bookId);
    } catch (error) {
      throw error;
    }
  },
  deleteBookService: async function (id) {
    try {
      await Book.destroy({ where: { livro_id: id } });
    } catch (error) {
      throw error;
    }
  },
  getAllBooksService: async function (authorId) {
    try {
      if (authorId) {
        return await Book.findAll({
          include: [
            {
              model: Author,
              where: { authorId },
            },
          ],
        });
      }
      return await Book.findAll();
    } catch (error) {
      throw error;
    }
  },
  getBookByIdService: async function (id) {
    try {
      return await Book.findByPk(id);
    } catch (error) {
      throw error;
    }
  }
};

export default bookService;
