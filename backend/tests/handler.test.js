const request = require("supertest");
const handler = require("../routes/handler");



describe("Get /find", () => {

    describe("when passed a SearchItem", () => {
      test("should respond with a 200 status code",  async () => {
        const res = await request(handler).get("/search?:").query({ SearchItem: 'space' });
        expect(res.statusCode).toEqual(200);
      });
    })
})
  