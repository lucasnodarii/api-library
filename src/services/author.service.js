import Author from "../models/Author.model.js";

const authorService = {
  createAuthorService: async function (author) {
    try {
      return await Author.create(author);
    } catch (error) {
      throw error;
    }
  },
  updateAuthorService: async function (author) {
    try {
      await Author.update(author, {
        where: {
          authorId: author.authorId,
        },
      });
      return await authorService.getAuthorByIdService(author.authorId);
    } catch (error) {
      throw error;
    }
  },
  deleteAuthorService: async function (id) {
    try {
      await Author.destroy({ where: { authorId: id } });
    } catch (error) {
      throw error;
    }
  },
  getAllAuthorsService: async function () {
    try {
      return await Author.findAll();
    } catch (error) {
      throw error;
    }
  },
  getAuthorByIdService: async function (id) {
    try {
      return await Author.findByPk(id);
    } catch (error) {
      throw error;
    }
  },
};

export default authorService;
