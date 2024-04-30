"use client";
import React, { useState, useEffect } from "react";
import ExerciseCard from "./Exercises.card";

const Page = () => {
  const [inputExercise, setInputExercise] = useState<string | null>(null);
  const [allExercises, setAllExercises] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 2; // Change as per your requirement

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const apiKey = "qt7OMb9wELUxlZr/inQyQg==CwxiwR6kdp7EeMUs";
      const url = `https://api.api-ninjas.com/v1/exercises?muscle=${inputExercise}`;
      const response = await fetch(url, {
        headers: {
          "X-Api-Key": apiKey,
        },
      });
      const data = await response.json();
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const exercisesOnPage = data.slice(startIndex, endIndex);
      setAllExercises(exercisesOnPage);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const handleButtonClick = () => {
    setCurrentPage(1); // Reset to first page when button is clicked
    fetchData();
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col items-center my-10">
      <div className="flex items-center gap-5">
        <input
          type="text"
          placeholder="Enter type of exercise or muscle you want to train"
          className="border-2 border-black"
          onChange={(e) => setInputExercise(e.target.value)}
        />
        <button className="border-2 border-black" onClick={handleButtonClick}>
          Click me
        </button>
      </div>
      {allExercises.length > 0 && (
        <div className="flex items-center justify-center gap-3 mt-4">
          <button
            className=" px-3 py-1 border border-gray-500 rounded"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}>
            Previous
          </button>
          <p>{currentPage}</p>
          <button
            className="px-3 py-1 border border-gray-500 rounded"
            onClick={() => handlePageChange(currentPage + 1)}>
            Next
          </button>
        </div>
      )}
      <div className="flex flex-col gap-4">
        {allExercises.map((item: any, index: number) => (
          <div key={index}>
            <ExerciseCard
              name={item.name}
              difficulty={item.difficulty}
              muscle={item.muscle}
              type={item.type}
              equipment={item.equipment}
              instructions={item.instructions}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
