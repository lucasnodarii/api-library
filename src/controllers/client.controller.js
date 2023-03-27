import clientService from "../services/client.service.js";

const clientController = {
  createClient: async function (req, res, next) {
    try {
      let client = req.body;
      if (
        !client.name ||
        !client.email ||
        !client.password ||
        !client.phone ||
        !client.address
      ) {
        throw new Error("Submit all fields for registration");
      }

      client = await clientService.createClientService(client);
      res.send(client);
    } catch (error) {
      next(error);
    }
  },
  updateClient: async function (req, res, next) {
    try {
      let client = req.body;
      if (
        !client.clientId ||
        !client.name ||
        !client.email ||
        !client.password ||
        !client.phone ||
        !client.address
      ) {
        throw new Error("Submit all fields for update");
      }
      client = await clientService.updateClientService(client);
      res.send(client);
    } catch (error) {
      next(error);
    }
  },
  deleteClient: async function (req, res, next) {
    try {
      await clientService.deleteClientService(req.params.id);
      res.send("User sucessfully deleted");
    } catch (error) {
      next(error);
    }
  },
  getAllClients: async function (req, res, next) {
    try {
      res.send(await clientService.getAllClientsService());
    } catch (error) {
      next(error);
    }
  },
  getClientById: async function (req, res, next) {
    try {
      res.send(await clientService.getClientByIdService(req.params.id));
    } catch (error) {
      next(error);
    }
  },
};

export default clientController;
