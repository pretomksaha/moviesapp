import request from "supertest";
import handler from "../routes/handler";


describe("POST /find", () => {

    describe("when passed a username and password", () => {
      test("should respond with a 200 status code", async () => {
        const response = request(handler).post("/find").send({title: 'spate', year: '2001'})
        expect(response.statusCode).toBe(200)
      })
    })
  
  })