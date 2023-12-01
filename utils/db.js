import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(
      "mongodb+srv://root:password%40123@cluster0.1vckvk2.mongodb.net/buyitout?retryWrites=true&w=majority",
      {
        dbName: "new_web_app",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
