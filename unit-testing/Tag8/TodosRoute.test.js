const request = require("supertest");
const app = require("../../../src/server");

describe("GET /v1/todos/all", () => {
  test("responds with json", async () => {
    const response = await request(app)
      .get("/v1/todos/all")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual([]);
  });
});


describe("GET /v1/todos/byid/:todoId", () => {
    test("responds with json for a specific todo", async () => {
      const todoId = "1"; // Beispiel-ID
  
      const response = await request(app)
        .get(`/v1/todos/byid/${todoId}`)
        .expect("Content-Type", /json/)
        .expect(200);
  
      expect(response.body).toHaveProperty("id", todoId);
      expect(response.body).toHaveProperty("task");
      expect(response.body).toHaveProperty("isDone");
    });
  });


  // Ich hab keine Ahnung was ich hier tue, das war größtenteils Chat-GPT.
  // Alleine wäre ich wohl schon an Zeile 21 gescheitert. ^^'