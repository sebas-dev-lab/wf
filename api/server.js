const express = require("express");
const app = express();

const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Servidor corriendo");
});

app.listen(PORT, () => {
  console.log("Server on PORT: ", PORT);
});
