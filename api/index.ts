import { buildApp } from "../src/app";

// Create the app instance outside of the handler
const app = await buildApp();

// Export the handler for Vercel
export default async function handler(req: Request, res: Response) {
  await app.ready();
  app.server.emit("request", req, res);
}
