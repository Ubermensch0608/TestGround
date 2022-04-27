import { rest } from "msw";
import PRODUCT_BRAND from "data/product-brand-info.json";

export const handlers = [
  rest.get("https://my.backend/product-brand", (req, res, ctx) => {
    return res(ctx.json(PRODUCT_BRAND));
  }),
];
