// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).end("this only handles post requests");
  }

  console.warn("this just cost us 1p, cheers");
  res.status(200).end("Eri got your message, thanks!");
};
