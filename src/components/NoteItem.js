import React from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import colors from '../theme/colors';


const NoteItem = ({ note, onEdit, onDelete }) => {
  return (
    <View style={styles.container}>
      {/* Título de nota */}
      <Text style={styles.title}>{note.title}</Text>
      {/* Cuerpo de la nota */}
      <Text style={styles.body}>{note.body}</Text>
      {/* Imágenes asociadas a la nota */}{/*hay que ver como ponerle un eliminar y ver pantalla completa*/}
      <View style={styles.imagesContainer}>
        {note.images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.image} />
        ))}
      </View>
      <View style={styles.buttonsContainer}>
        {/* Botón editar a la nota */}
        <Pressable style={styles.button} onPress={onEdit}>
          <Text style={styles.buttonText}>Editar</Text>
        </Pressable>
        {/* Botón elimina la nota */}
        <Pressable style={styles.button} onPress={onDelete}>
          <Text style={styles.buttonText}>Eliminar</Text>
        </Pressable>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondaryBackground,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    color: colors.primaryText,
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
    color: colors.secondaryText,
    marginBottom: 16,
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 8,
    marginBottom: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: colors.buttonLink,
    padding: 8,
    borderRadius: 4,
    width: '48%',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.primaryBackground,
    fontSize: 14,
  },
});

export default NoteItem;
