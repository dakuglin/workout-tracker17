const router = require("express").Router();  //require in express.Router
const Workout = require("../models/workout.js"); //require in workout.js

// this get request is used with the api.js
// the async function getLastWorkout() takes the last workout and displays the data
// module.exports = function*(app) {

router.get("/api/workouts", function(req, res) {
  Workout.find({})
  .then(dbWorkout => {
    console.log(dbWorkout);
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err)
  });
});
  
// router.get("/api/workouts/range", function(req, res) {
//   Workout.find({})
//   .then(dbWorkout => {
//     console.log(dbWorkoug);
//     res.json(dbWorkout);
//   })
//   .catch(err => {
//     res.status(400).json(err)
//   })
// }) 

//addExercise()
// router.put("/api/workouts/:id", ({ body }, res) => {
//   Workout.create(
//     {
//       _id: mongojs.ObjectId(req.params.id)
//     }, 
//     body
//   )
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });
  
// this post request is used with the api.js
// the async function createWorkout()
  

router.post("/api/workouts", (req, res) => {
  Workout.create(
    {
      type: "workout"
    }
  )
  .then(dbWorkout => {
    console.log(dbWorkout);
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err)
  });
});

  // router.delete("/api/workouts", ())




module.exports = router;

// post, put, get, get, delete