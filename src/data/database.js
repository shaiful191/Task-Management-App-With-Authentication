import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: 'Task_management_app',
    })
    .then(() => console.log('Database Connected'))
    .catch((err) => console.log(err));
} 