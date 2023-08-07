import mongoose from "mongoose";

const dbUrl: string = "mongodb://localhost:27017/CookBook_2";

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(dbUrl);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the application with an error code
  }
};

export default connectDB;
