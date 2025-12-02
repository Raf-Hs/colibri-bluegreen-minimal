const express = require("express");
const app = express();

app.use(express.json());

// Endpoint 1: healthcheck
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Endpoint 2: info de API
app.get("/api/info", (req, res) => {
  res.status(200).json({
    name: "Colibri Minimal APIIIIIIII",
    env: process.env.NODE_ENV || "development"
  });
});

// Endpoint 3: echo
app.post("/api/echo", (req, res) => {
  const { message } = req.body || {};
  if (!message) {
    return res.status(400).json({ error: "message is required" });
  }
  res.status(201).json({ message });
});

module.exports = app;
