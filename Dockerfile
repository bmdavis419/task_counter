# Use the official Bun image as base
FROM oven/bun:1.0 as builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install

# Copy source code
COPY . .

# Build the application
RUN bun run build

# Start fresh with a new base image for smaller final size
FROM oven/bun:1.0

WORKDIR /app

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./

# Expose the port the app runs on
EXPOSE ${PORT:-3000}

# Start the application
CMD ["bun", "run", "start"]