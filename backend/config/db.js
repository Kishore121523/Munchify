import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://kishore231512:Yoggaykis989*@cluster0.3bz4n.mongodb.net/munchify"
    )
    .then(() => {
      console.log("DB Connected");
    });
};
