FROM node:20-alpine3.19

WORKDIR /app

COPY package*.json ./
RUN npm install --include=dev

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]



# # Stage 1: Install dependencies
# FROM node:20-alpine3.19 AS builder

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# # Stage 2: Run the application
# FROM node:20-alpine3.19

# WORKDIR /app

# COPY --from=builder /app/node_modules /app/node_modules
# COPY . .

# EXPOSE 4000

# CMD ["npm", "start"]