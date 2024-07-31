import { useState } from "react"

const WorkoutForm = () => {
    const [title, setTitle] = useState("")
    const [reps, SetReps] = useState("")
    const [weight, SetWeight] = useState("")

    return ( 
        <form className="create">
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