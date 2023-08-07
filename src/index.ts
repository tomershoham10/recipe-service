import mongoose from "mongoose";
import startServer from "./server.js";

(async () => {
  try {
    await mongoose.connect("mongodb://localhost/CookBook_2");
    console.log("connected");
    startServer();
  } catch (e) {
    console.log(e);
  }
})();
