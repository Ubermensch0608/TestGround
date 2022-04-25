import { rest } from "msw";

export const submitHandlers = [
  rest.post("/api/submit", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
