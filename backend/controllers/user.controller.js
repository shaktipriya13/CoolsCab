const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');

module.exports.registerUser = async (req, res, next) => {
    try {
        // Validate request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        console.log(req.body);

        // Extract data from request body
        const { fullname,email, password } = req.body;

        // Check if fullname is correctly formatted
        let firstname = "", lastname = "";
        if (typeof fullname === "string") {
            [firstname, lastname] = fullname.split(" "); // Split string by space
            lastname = lastname || ""; // Handle single-word names
        } else if (typeof fullname === "object") {
            firstname = fullname.firstname || "";
            lastname = fullname.lastname || "";
        } else {
            return res.status(400).json({ error: "Invalid fullname format" });
        }

        // Hash password
        const hashedPassword = await userModel.hashPassword(password);

        // Create user
        const user = await userService.createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword
        });

        // Ensure generateAuthToken exists
        if (!user.generateAuthToken) {
            return res.status(500).json({ error: "Token generation failed" });
        }

        // Generate auth token
        const token = user.generateAuthToken();

        // Send response
        res.status(201).json({ token, user });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
