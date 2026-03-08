# Step 1: Use a Node image to build the app
FROM node:22-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of your code
COPY . .

# Step 5: Expose the port Vite runs on (usually 5173)
EXPOSE 5023

# Step 6: Start the development server
CMD ["npm", "run", "dev", "--", "--host"]
