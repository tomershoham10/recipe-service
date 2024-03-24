import mongoose from "mongoose";
const dbUrl = "mongodb://127.0.0.1:27017/CookBook_2";
const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl);
        console.log("Connected to MongoDB!");
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the application with an error code
    }
};
export default connectDB;
//# sourceMappingURL=db.js.map