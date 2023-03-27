import authorService from "../services/author.service.js";

const authorController = {
  createAuthor: async function (req, res, next) {
    try {
      let author = req.body;
      if (!author.name || !author.email || !author.phone) {
        throw new Error("Submit all fields for registration");
      }
      author = await authorService.createAuthorService(author);
      res.send(author);
    } catch (error) {
      next(error);
    }
  },
  updateAuthor: async function (req, res, next) {
    try {
      let author = req.body;
      if (!author.authorId || !author.name || !author.email || !author.phone) {
        throw new Error("Submit all fields for update");
      }
      author = await authorService.updateAuthorService(author);
      res.send(author);
    } catch (error) {
      next(error);
    }
  },
  deleteAuthor: async function (req, res, next) {
    try {
      await authorService.deleteAuthorService(req.params.id);
      res.send("Author sucessfully deleted");
    } catch (error) {
      next(error);
    }
  },
  getAllAuthors: async function (req, res, next) {
    try {
      res.send(await authorService.getAllAuthorsService());
    } catch (error) {
      next(error);
    }
  },
  getAuthorById: async function (req, res, next) {
    try {
      res.send(await authorService.getAuthorByIdService(req.params.id));
    } catch (error) {
      next(error);
    }
  },
};

export default authorController;
