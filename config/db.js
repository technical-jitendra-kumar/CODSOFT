import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(
            `MongoDB Connected: ${conn.connection.host}`.bgMagenta.white
        );
    } catch (error) {
        console.log(`MongoDB Error: ${error.message}`.bgCyan.white);
        process.exit(1); // Exit process on failure
    }
};

export default connectDB;
