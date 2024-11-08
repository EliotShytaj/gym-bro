const express = require("express")
const Workout = require("../models/WorkoutModel")
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require("../controllers/workoutController")
const router = express.Router()

//to get all workouts
router.get("/", getWorkouts)

//GET a single workout
router.get("/:id", getWorkout)

//POST a new workout
router.post("/", createWorkout)

//DELETE a workout
router.delete("/:id", deleteWorkout)

//UPDATE a new workout
router.patch("/:id", updateWorkout)

module.exports = router


