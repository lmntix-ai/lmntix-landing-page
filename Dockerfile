# Use Node.js to build the CSS
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install pnpm and dependencies
RUN npm install -g pnpm
RUN pnpm install

# Copy source files
COPY . .

# Build the CSS
RUN pnpm run build

# Use nginx to serve the static files
FROM nginx:alpine

# Copy the built files to nginx
COPY --from=builder /app/*.html /usr/share/nginx/html/
COPY --from=builder /app/style.css /usr/share/nginx/html/
COPY --from=builder /app/assets /usr/share/nginx/html/assets/
COPY --from=builder /app/js /usr/share/nginx/html/js/
COPY --from=builder /app/css /usr/share/nginx/html/css/

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 