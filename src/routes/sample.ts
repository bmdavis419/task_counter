import type { FastifyInstance } from "fastify";

// sample router
export default async function sampleRouter(fastify: FastifyInstance) {
  fastify.route({
    method: "GET",
    url: "/",
    schema: {
      // Swagger documentation
      description: "Returns a hello world message",
      tags: ["sample"],
      response: {
        200: {
          type: "object",
          properties: {
            message: { type: "string" },
          },
        },
      },
    },
    handler: async (request, reply) => {
      reply.send({ message: "world" });
    },
  });
}
