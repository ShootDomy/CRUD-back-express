import { query } from "../db.js";

export const getClientes = async (req, res) => {
  const { rows } = await query("SELECT * FROM clients_tb");

  return rows;
};
