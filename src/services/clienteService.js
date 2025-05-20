import { query } from "../db.js";

export const getClientes = async () => {
  const { rows } = await query(`SELECT * FROM clients_tb`);

  return rows;
};

export const crearCliente = async (clienteDto) => {
  const { nombre, email, trabajo, rate, estado } = clienteDto;

  const { rows } = await query(
    `INSERT INTO clients_tb (nombre, email, trabajo, rate, estado) 
    VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [nombre, email, trabajo, rate, estado]
  );

  return rows[0];
};
