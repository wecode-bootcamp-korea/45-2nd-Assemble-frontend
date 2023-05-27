import { rest } from "msw";

const me = {
  id: 1,
  kakaoId: "43333333234234234",
  name: "user1",
  gender: "female",
  level: 1,
};
export const handlers = [
  rest.post("/users/kakaologin", (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        accessToken: "1234",
      })
    );
  }),

  rest.get("/users", (req, res, ctx) => {
    const token = req.headers.get("Authorization") || "";

    if (token === "1234") {
      return res(
        ctx.status(200),
        ctx.json({
          user: me,
        })
      );
    }

    return res(
      ctx.status(403),
      ctx.json({
        errorMessage: "Not authorizeddd",
      })
    );
  }),

  // Handles a GET /user request
  rest.get("/user", null),
];
