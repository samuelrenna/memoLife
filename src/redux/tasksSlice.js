// FullList/src/redux/tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Slice de Redux para manejar el estado de las tareas
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    pendingTasks: [],
    completedTasks: [],
  },
  reducers: {
    // Acción agregar una nueva tarea
    addTask: (state, action) => {
      state.pendingTasks.push({ key: `${state.pendingTasks.length}`, task: action.payload, completed: false });
    },
    // Acción tarea completada o pendiente
    completeTask: (state, action) => {
      const taskToComplete = state.pendingTasks.find(task => task.key === action.payload);
      if (taskToComplete) {
        state.pendingTasks = state.pendingTasks.filter(task => task.key !== action.payload);
        state.completedTasks.push({ ...taskToComplete, completed: true });
      } else {
        const taskToUncomplete = state.completedTasks.find(task => task.key === action.payload);
        state.completedTasks = state.completedTasks.filter(task => task.key !== action.payload);
        state.pendingTasks.push({ ...taskToUncomplete, completed: false });
      }
    },
    // Acción para eliminar
    deleteTask: (state, action) => {
      state.pendingTasks = state.pendingTasks.filter(task => task.key !== action.payload);
      state.completedTasks = state.completedTasks.filter(task => task.key !== action.payload);
    },
  },
});

export const { addTask, completeTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
