const router = require("express").Router();  //require in express.Router
const { get } = require("mongoose");
const Workout = require("../models/workout.js"); //require in workout.js
const { post } = require("./html.js");

//getLastWorkout()
router.get("/api/workouts", function(req, res) {
  Workout.find({})
  .then(dbWorkout => {
    console.log(dbWorkout);
  })
  .catch(({ message }) => {
    res.status(400).json({result: "err"})
    console.log(message);
  });

})

//addExercise()
// router.put("/api/workout/:id", ({ body }, res) => {
//   Workout.insert(body)
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });


// //createWorkout()
// router.post("/api/workouts", function(req, res) {
//   Workout.create(req.body)
//   .then(dbWorkout => {
//     console.log(dbWorkout);
//   })
//   .catch(({ message }) => {
//     res.status(400).json({result: "err"})
//     console.log(message);
//   });

// })

module.exports = router;

// post, put, get, get, delete