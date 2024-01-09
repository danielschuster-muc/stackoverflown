import type { VercelRequest, VercelResponse } from "@vercel/node";

import { kv } from "@vercel/kv";

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  let views: number | undefined | null = 0;

  switch (request.method) {
    case "GET":
      views = await kv.get("views");
      break;
    case "POST":
      views = await kv.incr("views");
      break;
    default:
      return response.status(405).end();
  }

  return response.status(200).json({ views });
}
