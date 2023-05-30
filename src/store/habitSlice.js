

// as we are not using Redux for the CRUD operations we dont need this 
import { createSlice } from "@reduxjs/toolkit";

// Create a Redux slice for managing habits
const habitSlice = createSlice({
  name: "habit",
  initialState: {
    tasks: [],
  },
  reducers: {
    // Add a new task to the state
    addTask: (state, action) => {
      const newTask = action.payload;
      state.tasks.push({
        id: newTask.id,
        title: newTask.title,
        categoryURL: newTask.categoryURL,
        numOfDays: newTask.numOfDays,
        startingDate: newTask.startingDate,
        completedDays: newTask.completedDays,
      });
      
    },
    // Update the completion status of a task for a specific date
    updateDays: (state, action) => {
      const { date, id, isCompleted } = action.payload;
      // Find the task in the state by its ID
      const taskToUpdate = state.tasks.find((task) => task.id === id);
      if (taskToUpdate) {
        if (isCompleted === true) {
          // Add the date to the completedDays array if the task is completed
          taskToUpdate.completedDays.push(date);
        } else {
          // Remove the date from the completedDays array if the task is not completed
          taskToUpdate.completedDays = taskToUpdate.completedDays.filter(
            (day) => day !== date
          );
        }
        //Update task in Firestore
        // todo
        
      }
    },
    // Remove a task from the state
    removeTask: (state, action) => {
      const { id } = action.payload;
      // Filter out the task with the specified ID from the tasks array
      state.tasks = state.tasks.filter((task) => task.id !== id);
      
    },
  },
});

// Extract the action creators and reducer from the slice
export const { addTask, updateDays, removeTask } = habitSlice.actions;
export default habitSlice.reducer;