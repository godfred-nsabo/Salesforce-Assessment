//const express = require("express");
import express from "express";
//const cors = require("cors");
import cors from "cors";
// const data = require("./productData.js");
import data from "./productData.js";
const app = express();
app.use(cors());
app.get("/api/products", (req, res) => {
  res.send(data.products);
});
app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found!" });
  }
});
app.listen(5050, () => {
  console.log("serve at http://localhost:5050");
});
