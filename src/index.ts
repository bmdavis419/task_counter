import { buildApp } from "./app";

async function start() {
  const app = await buildApp();

  const port = process.env.PORT || "3000";
  const portNumber = parseInt(port);

  try {
    await app.listen({ port: portNumber });
    console.log(`Server running at http://localhost:${portNumber}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

start();
