import User from '../models/User.js'
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Register a new user
const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        //check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        //hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        //create new user
        const newUser = new User({ username, email, password: hashedPassword }); // User is a model
        console.log(newUser)
        await newUser.save()
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Login an existing user
const login = async (req, res) => { 
    try {
        const { email, password } = req.body
        //check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        //compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        //generate token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        //add token to the db
        // await User.findByIdAndUpdate(user._id, { token })
        
        // Send response to the client
        return res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
                }
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

//export

export {register, login}