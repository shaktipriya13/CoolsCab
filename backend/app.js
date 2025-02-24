const dotenv = require('dotenv');
dotenv.config(); // Ensure .env is loaded before requiring other modules

const express = require('express');
const cors = require('cors');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');

const app = express();

// Connect to Database with Error Handling
connectToDb().catch(err => {
    console.error("Database connection failed:", err);
    process.exit(1); // Exit process if DB connection fails
});

// CORS Configuration: Allow all in development, restrict in production
const corsOptions = {
    origin: process.env.NODE_ENV === "production" ? "https://yourdomain.com" : "*",
    credentials: true
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Shakti Priya");
});

app.use('/users', userRoutes);

module.exports = app;
