const dotenv = require('dotenv');
dotenv.config(); // Load environment variables

const express = require('express');
const cors = require('cors');
const connectToDb = require('./db/db'); // Ensure this file exports a function properly
const userRoutes = require('./routes/user.routes');

const app = express();

// Ensure connectToDb is a function before calling it
if (typeof connectToDb !== 'function') {
    console.error("connectToDb is not a function. Check your db/db.js file.");
    process.exit(1);
}

// Connect to Database with Error Handling
(async () => {
    try {
        await connectToDb();
        console.log("Database connected successfully!");
    } catch (err) {
        console.error("Database connection failed:", err);
        process.exit(1); // Exit process if DB connection fails
    }
})();

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
