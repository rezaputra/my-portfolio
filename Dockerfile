FROM node:20-alpine3.18

RUN addgroup app && adduser -S -G app app
USER app

# Set the working directory and assign ownership to the non-root user
WORKDIR /app

# Copy the package.json and package-lock.json files into the image.
COPY package*.json ./

USER root
RUN chown -R app:app .
USER app

# Install the dependencies.
RUN npm install


# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
RUN npx prisma generate

CMD npm run dev
