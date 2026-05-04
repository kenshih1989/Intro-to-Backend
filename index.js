import dotenv from "dotenv";
import connectDB from "./Backend/src/config/database.js";
import app from "./Backend/src/app.js";

dotenv.config({
  path: './.env'
}); // Load environment variables from .env file

const startServer = async () => {
  try {
    await connectDB();

    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port: ${process.env.PORT || 8000}`);
    });

  } catch (error) {
    console.error("Failed to start the server:", error);
    process.exit(1);
  }
};

startServer();