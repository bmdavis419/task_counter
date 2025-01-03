import Fastify from "fastify";
import sampleRouter from "./routes/sample";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";

export async function buildApp() {
  const fastify = Fastify({
    logger: true,
  });

  // Register Swagger plugins
  await fastify.register(fastifySwagger, {
    swagger: {
      info: {
        title: "Task Counter API",
        description: "Task Counter API documentation",
        version: "1.0.0",
      },
      host: "localhost:3000",
      schemes: ["http"],
      consumes: ["application/json"],
      produces: ["application/json"],
    },
  });

  await fastify.register(fastifySwaggerUi, {
    routePrefix: "/docs",
    uiConfig: {
      docExpansion: "full",
      deepLinking: false,
    },
  });

  // Register routes
  await fastify.register(sampleRouter, { prefix: "/sample" });

  return fastify;
}
