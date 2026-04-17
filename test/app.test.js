const request = require("supertest");
const express = require("express");

const app = express();
app.get("/health", (req, res) => {
  res.json({ status: "Server is running" });
});

test("GET /health", async () => {
  const res = await request(app).get("/health");
  expect(res.statusCode).toBe(200);
});