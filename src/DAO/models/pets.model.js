import mongoose from "mongoose";

const { model } = mongoose;

const PetSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['dog', 'cat', 'bird'],
      required: true,
    },
    age: {
      type: Number,
      min: 1,
      max: 15,
      required: true,
    },
});

const petsColl = "pets";
export const PetsModel = model(petsColl, PetSchema); 
