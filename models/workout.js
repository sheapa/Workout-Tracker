const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
   day: {
       type: Date,
    //    run date.now inside anon function so that the date.now function runs every time an obj is created. not just when db is created.
       default: () => Date.now()
   },
   exercises: [
       {
        type: {
            type: String,
            required: "Select a type of exercise."
        },
        name: {
            type: String,
            trim: true,
            required: "Enter name for exercise."
        },
        duration: {
            type: Number,
            required: "Enter duration for exercise."
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        }
       }
   ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;