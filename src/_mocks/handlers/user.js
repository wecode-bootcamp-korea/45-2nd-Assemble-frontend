import { rest } from "msw";

const me = {
  id: 1,
  kakaoId: "43333333234234234",
  name: "user1",
  gender: "female",
  level: 1,
};
export const handlers = [
  rest.post("/api/login", (req, res, ctx) => {
    sessionStorage.setItem("is-authenticated", "true");

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        token: "1234",
      })
    );
  }),

  rest.get("/api/me", (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem("is-authenticated");

    const token = req.headers.get("Authorization") || "";

    if (token || isAuthenticated) {
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
        errorMessage: "Not authorized",
      })
    );
  }),

  // Handles a GET /user request
  rest.get("/user", null),
];
