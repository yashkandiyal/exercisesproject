
import React from "react";
type props = {
    name: string 
    type: string
    muscle: string 
    equipment: string
    difficulty: string 
    instructions:string
}
const ExerciseCard = (props:props) => {
  return (
    <div className="max-w-md bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{props.name}</div>
        <p className="text-gray-700 text-base mb-2">
          <strong>Type:</strong> {props.type}
        </p>
        <p className="text-gray-700 text-base mb-2">
          <strong>Muscle:</strong> {props.muscle}
        </p>
        <p className="text-gray-700 text-base mb-2">
          <strong>Equipment:</strong> {props.equipment}
        </p>
        <p className="text-gray-700 text-base mb-2">
          <strong>Difficulty:</strong> {props.difficulty}
        </p>
        <p className="text-gray-700 text-base mb-2">
          <strong>Instructions:</strong>
        </p>
        <p className="text-gray-700 text-base">{props.instructions}</p>
      </div>
    </div>
  );
};

export default ExerciseCard;
