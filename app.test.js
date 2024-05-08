import app from "./app.js";
import supertest from "supertest";

describe("POST /orders", () => {
  it("should return 200 and order_id, cost, and parts", async () => {
    const response = await supertest(app)
      .post("/orders")
      .send({
        components: ["I","A","D","F","K"],
      });
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.order_id).toBeDefined();
    expect(response.body.cost).toBeDefined();
    expect(response.body.parts).toBeDefined();
  });

  it("should return 500 and error message", async () => {
    const response = await supertest(app)
      .post("/orders")
      .send({
        components: ["motherboard", "cpu", "ram"],
      });
    expect(response.status).toBe(500);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe("Error occurred");
  });
});
 