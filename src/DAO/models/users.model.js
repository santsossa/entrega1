import mongoose from "mongoose";

const { model } = mongoose; // Importa model desde mongoose

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
  },
  pets: {
    type: [String], 
    default: [],
  },
});

const usersColl = "users"; 
export const UsersModel = model(usersColl, UserSchema); 
