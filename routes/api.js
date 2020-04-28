const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.post("/api/transaction/bulk", ({ body }, res) => {
    Transaction.insertMany(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.get("/api/workouts", (req, res) => {
    Workout.find()
      .then(allWorkouts => {
          console.log(allWorkouts);
        res.json(allWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  module.exports = router;
  