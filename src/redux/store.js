import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import notesReducer from './notesSlice';

// Configuración del store de Redux
// para reducers de tasks y notes
const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    notes: notesReducer,
  },
});

export default store;
