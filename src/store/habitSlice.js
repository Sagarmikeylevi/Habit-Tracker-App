import { createSlice } from "@reduxjs/toolkit";

const habitSlice = createSlice({
  name: "habit",
  initialState: {
    tasks: [],
  },
  reducers: {
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
    updateDays: (state, action) => {
      const { date, id, isCompleted } = action.payload;
      const taskToUpdate = state.tasks.find((task) => task.id === id);
      if (taskToUpdate) {
        if (isCompleted === true) {
          taskToUpdate.completedDays.push(date);
        } else {
          taskToUpdate.completedDays = taskToUpdate.completedDays.filter(
            (day) => day !== date
          );
        }
      }
    },
  },
});

export const { addTask, updateDays } = habitSlice.actions;
export default habitSlice.reducer;
