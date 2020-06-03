const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema ({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
        type: {
            type: String,
            trim: true
        },
        name: {
            type: String,
            trim: true
        },
        duration: {
            type: Number
        },
        weight: {
            type: Number
        },
        set: {
            type: Number
        },
        reps: {
            type: Number,
        }

        }
    ]
},
{
  toJSON: {
   
    virtuals: true
  }
}
);
ema
workoutSchema.virtual("totalDuration").get(function () {
return this.exercises.reduce((total, exercise) => {
  return total + exercise.duration;
}, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
