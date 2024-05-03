import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import path from "path"; // Import path module
import router from "./router/route.js";

/** import connection file */
import connect from "./database/connection.js";

const app = express();
const __dirname = path.resolve();

/** app middlewares */
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();

/** application port */
const port = process.env.PORT || 8080;

/** routes */
app.use("/api", router); /** APIs */

// Serve static files
app.use(express.static(path.join(__dirname, "client/build")));

// Define routes
app.get("/", (req, res) => {
  res.json("Get Request");
});

// Catch-all route to serve index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

/** start server only when we have a valid connection */
const startServer = async () => {
  try {
    await connect();
    app.listen(port, () => {
      console.log(`Server connected to http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error starting server:", error.message || error);
    process.exit(1); // Exit with non-zero code on error
  }
};

/** Check if environment variables are properly configured */
if (!process.env.PORT) {
  console.error("Please set the PORT environment variable");
  process.exit(1); // Exit with non-zero code if PORT is not defined
}

/** Start the server */
startServer();
