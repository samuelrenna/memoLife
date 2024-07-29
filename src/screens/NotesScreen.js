import React from 'react';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote } from '../redux/notesSlice';
import NoteItem from '../components/NoteItem';
import colors from '../theme/colors';


export default function NotesScreen({ navigation }) {
  const notes = useSelector(state => state.notes);
  const dispatch = useDispatch();

  // eliminar una nota
  const handleDeleteNote = (id) => {
    dispatch(deleteNote(id));
  };

  return (
    <View style={styles.container}>
      {/* Botón para una nueva nota */}
      <Pressable
        style={styles.addButton}
        onPress={() => navigation.navigate('CreateNoteScreen')}
      >
        <Text style={styles.addButtonText}>Crear Nueva Nota</Text>
      </Pressable>
      
      <Text style={styles.notesTitle}>Notas</Text>

      {/* Lista de notas */}
      <FlatList
        style={styles.list}
        data={notes}
        renderItem={({ item }) =>
          <NoteItem
            note={item}
            //editarr notas 
            onEdit={() => navigation.navigate('EditNoteScreen', { note: item })}
            onDelete={() => handleDeleteNote(item.id)}
          />
        }
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
    padding: 16,
  },
  addButton: {
    backgroundColor: colors.buttonLink,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  addButtonText: {
    color: colors.primaryBackground,
    fontSize: 18,
  },
  notesTitle: {
    fontSize: 24,
    color: colors.primaryText,
    marginBottom: 16,
  },
  list: {
    width: '100%',
  },
});
