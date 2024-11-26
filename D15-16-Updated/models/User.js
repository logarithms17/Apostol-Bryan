import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
},
    {
        timestamps: true // This will add createdAt and updatedAt fields
    }
);

const User = mongoose.model('User', userSchema); // Collection name: users

export default User