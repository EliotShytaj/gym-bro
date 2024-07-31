import { useState } from "react"

const WorkoutForm = () => {
    const [title, setTitle] = useState("")
    const [reps, SetReps] = useState("")
    const [weight, SetWeight] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = {title, load, reps}

        const response = await fetch("/api/workouts", {
            method: "POST",
            body: JSON.stringify(workout),
            header: {
                "Content-Type": "application/json"
            }
        })
        const json = await response.json()
    }

    return ( 
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Exercise Title:</label>
            <input 
            type="text" onChange={(e) => setTitle(e.target.value)}
            value = {title}
            />


            <label>Reps:</label>
            <input 
            type="number" 
            onChange={(e) => setReps(e.target.value)}
            value = {reps}
            />


            <label>Weight (lb):</label>
            <input 
            type="number" 
            onChange={(e) => setLoad(e.target.value)}
            value = {load}
            />

            <button>Add Workout</button>
        </form>
    );
}
 
export default WorkoutForm;