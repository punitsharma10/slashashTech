const express = require('express');
const cors= require('cors');
const app = express();
const connectedTOMongoDb = require("./db");
const moviesRoutes = require("./routes/Movie");
app.use(express.json());
app.use(cors())

app.use("/movies", moviesRoutes);


app.listen(8080, () => {
  connectedTOMongoDb();
});