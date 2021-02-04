import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useNewUrlParser: true,
    });
    console.log(
      `Database connected :${conn.connection.host}`.yellow.underline.bold
    );
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
