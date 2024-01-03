import mongoose from "mongoose";

const mongoURI = "mongodb://127.0.0.1:27017/";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectToMongo;
