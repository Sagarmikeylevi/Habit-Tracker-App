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
  },
});

export const { addTask } = habitSlice.actions;
export default habitSlice.reducer;
