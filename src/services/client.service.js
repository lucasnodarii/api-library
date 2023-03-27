import Client from "../models/Client.model.js";

const clientService = {
  createClientService: async function (client) {
    try {
      return await Client.create(client);
    } catch (error) {
      throw error;
    }
  },
  updateClientService: async function (client) {
    try {
      await Client.update(client, {
        where: {
          clientId: client.clientId,
        },
      });
      return await clientService.getClientByIdService(client.clientId);
    } catch (error) {
      throw error;
    }
  },
  deleteClientService: async function (id) {
    try {
      await Client.destroy({
        where: {
          clientId: id,
        },
      });
    } catch (error) {
      throw error;
    }
  },
  getAllClientsService: async function () {
    try {
      return await Client.findAll();
    } catch (error) {
      throw error;
    }
  },
  getClientByIdService: async function (id) {
    try {
      return await Client.findByPk(id);
    } catch (error) {
      throw error;
    }
  },
};

export default clientService;
