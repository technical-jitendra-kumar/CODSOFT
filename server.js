// Imports
import express from 'express';
import dotenv from 'dotenv';
import 'colors'; // Ensures colors package is loaded globally
import connectDB from './config/db.js';
import testRoutes from './routes/testRoutes.js';

// dotenv config
dotenv.config();

// MongoDB connection
connectDB();

// Express app
const app = express();

// Middleware
app.use(express.json()); // Body parser middleware for JSON requests

// Routes
app.use('/api/v1/test', testRoutes);

// Port
const PORT = process.env.PORT || 8080;
const MODE = process.env.DEV_MODE || 'production'; // Default to 'production' if undefined

// Listen
app.listen(PORT, () => {
    console.log(`Server is running in ${MODE} mode on port ${PORT}`.bgCyan.white);
});
