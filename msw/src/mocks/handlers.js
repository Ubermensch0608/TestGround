// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  // Handles a POST /login request
  rest.post("login/", (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem("is-authenticated", "true");

    return res(
      // Response with a 200 status code
      ctx.status(200)
    );
  }),

  // Handles a GET /user request
  rest.get("/user", (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem("is-authenticated");

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  }),
];
