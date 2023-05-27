import { rest } from "msw";

const foo = {
  id: 1,
  kakaoId: "123132",
  name: "usffer1",
  gender: "female",
  level: 1,
};
export const handlers = [
  rest.post("/reservations", (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        foo,
      })
    );
  }),
];
