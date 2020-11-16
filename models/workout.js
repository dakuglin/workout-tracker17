const mongoose = require("mongoose"); // require in mongoose

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({

  // day object
  day: {
    type: Date,
    default: Date.now
  },
  // exercise array of objects 
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "Please enter a workout name."
      },
      type: {
        type: String,
        required: "Please enter a workout type."
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      duration: {
        type: Number,
        required: "Please enter duration of workout (min)"
      },
    }
  ] 
});


// adds a dynamically-created property to schema
workoutSchema.virtual("totalDuration").get(function () {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);  //telling mongoose we are going to name this model workout

module.exports = Workout;
