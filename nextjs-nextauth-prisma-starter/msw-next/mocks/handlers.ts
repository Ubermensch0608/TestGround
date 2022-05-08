import { rest } from "msw";
import PRODUCT_BRAND from "data/product-brand-info.json";
import { nanoid } from "nanoid";

export const handlers = [
  rest.get("https://my.backend/product-brand", (req, res, ctx) => {
    return res(ctx.json(PRODUCT_BRAND));
  }),

  rest.post("https://my.backend/post-something", (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        id: "e6f36a",
        content: "test",
      })
    );
  }),

  rest.get("https://my.backend/post-something", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: "n1",
          content: "react",
        },
        {
          id: "n2",
          content: "next",
        },
        {
          id: "n3",
          content: "typescript",
        },
      ])
    );
  }),
];
