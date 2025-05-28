import mongoose from "mongoose";

const validateMongoURI = (uri) => {
  if (!uri || typeof uri !== "string") return false;
  return /^mongodb(\+srv)?:\/\/.+/.test(uri);
};

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI;

  if (!validateMongoURI(mongoURI)) {
    console.error(
      "🚨 Invalid or missing MONGO_URI environment variable. Please check your configuration."
    );
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
