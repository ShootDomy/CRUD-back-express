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

export const actualizarCliente = async (clienteDto, id) => {
  const { nombre, email, trabajo, rate, estado } = clienteDto;

  const { rows } = await query(
    `update clients_tb 
    set nombre = $1, email = $2, trabajo = $3, rate = $4, estado = $5 
    where id = $6 RETURNING *`,
    [nombre, email, trabajo, rate, estado, id]
  );

  return rows[0];
};

export const eliminarCliente = async (id) => {
  const result = await query(`DELETE FROM clients_tb WHERE id = $1`, [id]);

  return result.rowCount > 0;
};

export const getClienteById = async (id) => {
  const { rows } = await query(`SELECT * FROM clients_tb WHERE id = $1`, [id]);

  return rows;
};
