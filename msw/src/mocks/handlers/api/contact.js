import { rest } from "msw";

export const contactHandler = [
  rest.post("/api/contact", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
