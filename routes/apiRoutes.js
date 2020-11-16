const router = require("express").Router();  //require in express.Router
const Workout = require("../models/workout.js"); //require in workout.js

// this get request is used with the api.js
// the async function getLastWorkout() takes the last workout and displays the data
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
  
// this get request is used with the api.js
// the async function getWorkoutsInRange() takes all the workout data in the database and plots it with the stats.js file/stats.html
router.get("/api/workouts/range", function(req, res) {
  Workout.find({})
  .then(dbWorkout => {
   // console.log(dbWorkout);
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});
 
// this post request is used with the api.js
// the async function createWorkout() will create a new workout in the database
router.post("/api/workouts", (req, res) => {
  var newExercise = req.body
  console.log(newExercise)

  Workout.create(
   req.body
  )
  .then(dbWorkout => {
    console.log(dbWorkout);
    //var obj = JSON.parse(dbWorkout)
    //console.log(obj)
    res.json(dbWorkout)
    //res.json(obj);
  })
  .catch(err => {
    res.status(400).json(err)
  });
});


// this put request is used with the api.js
// the async function addExercise() will add a new exercise to the database
router.put("/api/workouts/:id", (req, res) => {
  Workout.update(req.params.id, { $push: { exercises: req.body } }, { new: true })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.delete("/api/workouts", function(req, res) {
  Workout.findByIdAndDelete(req.body.id)
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  })
});

module.exports = router;

