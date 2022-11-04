const fs = require("fs");
const path = require("path");
const apiRoutes = require("./routes/api-routes/note-routes");
const htmlRoutes = require("./routes/html-routes.js");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static("public"));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log("API server now on port ${PORT}!");
});
