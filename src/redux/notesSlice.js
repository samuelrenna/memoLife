import { createSlice } from '@reduxjs/toolkit';

// Slice de Redux para manejar el estado de las notas
const notesSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    // Acción paara nueva nota
    addNote: (state, action) => {
      const { title, body, images } = action.payload;
      state.push({ id: Date.now(), title, body, images });
    },
    // Acción actualizar una nota que ya esta
    updateNote: (state, action) => {
      const { id, title, body, images } = action.payload;
      const note = state.find(note => note.id === id);
      if (note) {
        note.title = title;
        note.body = body;
        note.images = images;
      }
    },
    // Acción para eliminar una nota
    deleteNote: (state, action) => {
      return state.filter(note => note.id !== action.payload);
    },
  },
});

export const { addNote, updateNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
