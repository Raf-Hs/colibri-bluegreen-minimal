const request = require("supertest");
const app = require("./src/app");

describe("Colibri API integration tests", () => {
  test("GET /health debe responder status ok", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
  });

  test("GET /api/info debe regresar nombre y entorno", async () => {
    const res = await request(app).get("/api/info");
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("Colibri Minimal API");
    expect(res.body.env).toBeDefined();
  });

  test("POST /api/echo debe regresar el mensaje enviado", async () => {
    const payload = { message: "hola huitzilin" };
    const res = await request(app).post("/api/echo").send(payload);
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe(payload.message);
  });

  test("POST /api/echo sin message debe regresar 400", async () => {
    const res = await request(app).post("/api/echo").send({});
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("message is required");
  });
});
