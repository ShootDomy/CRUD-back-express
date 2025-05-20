import * as clienteService from "../services/clienteService.js";

export const getClientes = async (req, res) => {
  try {
    const clientes = await clienteService.getClientes(req, res);

    res.status(200).json(clientes);
  } catch (error) {
    if (error.driverError) {
      res.status(500).json({ message: "ERROR AL OBTENER LOS CLIENTES" });
    }
    res.status(500).json({ message: `Internal Server Error, ${error}` });
  }
};

export const crearCliente = async (req, res) => {
  try {
    const clienteDto = req.body;

    const cliente = await clienteService.crearCliente(clienteDto);

    res.status(201).json(cliente);
  } catch (error) {
    if (error.driverError) {
      res.status(500).json({ message: "ERROR AL CREAR EL CLIENTES" });
    }
    res.status(500).json({ message: `Internal Server Error, ${error}` });
  }
};

export const actualizarCliente = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Falta Id" });
    }

    const clienteDto = req.body;

    const cliente = await clienteService.actualizarCliente(clienteDto, id);

    if (!cliente) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    res.status(201).json(cliente);
  } catch (error) {
    if (error.driverError) {
      res.status(500).json({ message: "ERROR AL CREAR EL CLIENTES" });
    }
    res.status(500).json({ message: `Internal Server Error, ${error}` });
  }
};

export const eliminarCliente = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Falta Id" });
    }

    const cliente = await clienteService.eliminarCliente(id);
    console.log("cliente", cliente);

    if (!cliente) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    res.status(200).json({ message: "Cliente eliminado" });
  } catch (error) {
    if (error.driverError) {
      res.status(500).json({ message: "ERROR AL ELIMINAR EL CLIENTES" });
    }
    res.status(500).json({ message: `Internal Server Error, ${error}` });
  }
};
