import React, { useEffect, useState } from "react";
import { getAllPublicRoutines,getActivityById } from "../api";
// import { useNavigate } from "react-router-dom";

export default function AllRoutines({ routines, setRoutines}) {
//   const navigate = useNavigate();
useEffect(() => {
    getAllPublicRoutines().then((result) => {
      setRoutines(result);
    });
  }, []);
  const routineMapping = routines.map((routine, index) => {
    return (
      <div key={index}>
     
        <h5>Username:{routine.creatorName}</h5>
        <h5>Goal:{routine.goal}</h5>
        <h5>Name of routine:{routine.name}</h5>
      </div>
      
    );
  });

//   const activityMapping = routine.activities.map((activity, index) => {
//     return (
//       <div key={index}>
//         <h3>Name of Activity:{activity.name}</h3>
//         <h5>Description:{activity.description}</h5>
//         <h5>Duration:{activity.duration}</h5>
//       </div>
//     );
//   });


  return (
    <div>
      <h1>This is all routines</h1>
      {routineMapping}
      
    </div>
  );
}
