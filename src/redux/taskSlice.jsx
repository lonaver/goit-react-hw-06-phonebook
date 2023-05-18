import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksInitialState = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  reducers: {
    addTask(state, action) {
      const { name, number } = action.payload;
      const normoliseName = name.toLowerCase();
      const contactFind = state.find(
        contact =>
          contact.name.toLowerCase() === normoliseName ||
          contact.number === number
      );
      if (contactFind) {
        alert(`${contactFind.name} is alredy contact`);
        return;
      }

      const newContact = { id: nanoid(), name, number };
      state.push(newContact);
    },
    deleteTask(state, action) {
      console.log('delete', action.payload);
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
