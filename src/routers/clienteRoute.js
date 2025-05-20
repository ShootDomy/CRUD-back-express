import express from "express";
import * as clienteController from "../controllers/clienteController.js";

const router = express.Router();

router.get("/clientes", clienteController.getClientes);

router.post("/clientes", clienteController.crearCliente);

router.put("/clientes/:id", clienteController.actualizarCliente);

export default router;
