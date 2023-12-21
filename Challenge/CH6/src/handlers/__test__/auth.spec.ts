import request from "supertest";
import server from "../..";

describe("POST /LOGIN", () => {
  it("should return 200 and token", async () => {
    const email = "superadmin@gmail.com";
    const password = "12345678";
    return request(server)
      .post("/api/login")
      .set("Accept", "application/json")
      .send({ email, password })
      .then((res) => {
        server.close();
        expect(res.statusCode).toEqual(200);
        expect(res.body.data.token).toEqual(expect.any(String));
      });
  });
});
