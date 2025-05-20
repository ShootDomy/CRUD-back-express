import express from "express";
import cors from "cors";
import clienteRoute from "./routers/clienteRoute.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/api", clienteRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${3000}`);
});

// app.get('/', (req, res) => {
//   res.send('<h1>Hello World!</h1>')
// })
