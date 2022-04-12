const request = require("supertest");
const handler = require("../routes/handler");



describe("Get /search", () => {
    describe("when passed a SearchItem", () => {
      test("should respond with a 200 status code",  async () => {
        const SearchItem= 'space';
        const res = await request(handler).get(`/search?SearchItem=${SearchItem}`);
        expect(res.statusCode).toEqual(200);
      });
    })
})
  