import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import path from "path"; // Import path module
import router from "./router/route.js";

/** import connection file */
import connect from "./database/connection.js";

const app = express();
const _dirname = path.resolve();

/** app middlewares */
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();

/** application port */
const port = process.env.PORT || 8080;

/** routes */
app.use("/api", router); /** APIs */

app.use(express.static(path.join(_dirname, "client/build")));

app.get("/", (req, res) => {
  try {
    res.json("Get Request");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(_dirname, "client/build", "index.html"));
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
  }
};

/** Check if environment variables are properly configured */
if (!process.env.PORT) {
  console.error("Please set the PORT environment variable");
  process.exit(1);
}

/** Start the server */
startServer();
