import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [{ id: 1, text: "TEST/첫줄", done: false }],
  reducers: {
    createTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (text) => {
        return {
          payload: {
            id: nanoid(),
            text,
            done: false,
            creaetAt: new Date().toString(),
          },
        };
      },
    },
    removeTodo: {
      reducer: (state, action) => {
        return state.filter((todo) => todo.id !== action.payload);
      },
    },
    toggleTodo: {
      reducer: (state, action) => {
        const todo = state.find((todo) => todo.id === action.payload);
        todo.done = !todo.done;
      },
    },
  },
});

export const { createTodo, removeTodo, toggleTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
