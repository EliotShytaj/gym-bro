const WorkoutDetails = ({ workout }) => {
    return ( 
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p><strong>Weight (lb): </strong>{workout.weight}</p>
            <p>{workout.createdAt}</p>
        </div>
     );
}
 
export default WorkoutDetails;