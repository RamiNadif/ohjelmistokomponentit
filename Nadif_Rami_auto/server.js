import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import tietovarasto from "./tietovarasto.json" with { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;
const host = "localhost";

app.use(express.static("public"));

app.get("/autovarasto", (req, res) => {
  res.json(tietovarasto);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "auto.html"));
});
app.listen(port, () => console.log(`${host} ${port} Palvelee...`));
