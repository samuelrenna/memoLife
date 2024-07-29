import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Pressable, Text, Image, ScrollView, Button, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/notesSlice';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import colors from '../theme/colors';


export default function CreateNoteScreen() {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();

  // guarda la nueva nota y de regreso notescreen
  const saveNote = () => {
    dispatch(addNote({ title, body, images }));
    navigation.goBack();
  };

  // imagen de la galería o tomar una foto
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    const cameraPermissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false || cameraPermissionResult.granted === false) {
      alert("Permission to access camera and gallery is required!");
      return;
    }

    Alert.alert(
      'Seleccionar Imagen',
      'Elija una opción:',
      [
        {
          text: 'Tomar Foto',
          onPress: async () => {
            const result = await ImagePicker.launchCameraAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
              aspect: [1, 1],
              quality: 1,
            });

            if (!result.canceled) {
              setImages([...images, result.assets[0].uri]);
            }
          },
        },
        {
          text: 'Seleccionar de la Galería',
          onPress: async () => {
            const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
              aspect: [1, 1],
              quality: 1,
            });

            if (!result.canceled) {
              setImages([...images, result.assets[0].uri]);
            }
          },
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* título de la nota */}
      <TextInput
        style={styles.input}
        placeholder="Título de la nota"
        value={title}
        onChangeText={setTitle}
      />
      {/* el cuerpo de la nota */}
      <TextInput
        style={[styles.input, styles.bodyInput]}
        placeholder="Cuerpo de la nota"
        value={body}
        onChangeText={setBody}
        multiline
      />
      {/* Botón que agrega una img */}
      <Button title="Agregar Imagen" onPress={pickImage} />
      {/* Caja para mostrar las imágenes seleccionadas miniaturas*/}
      <View style={styles.imagesContainer}>
        {images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.image} />
        ))}
      </View>
      {/* guardar la nota */}
      <Pressable
        style={styles.saveButton}
        onPress={saveNote}
      >
        <Text style={styles.saveButtonText}>Guardar Nota</Text>
      </Pressable>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: colors.secondaryText,
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    backgroundColor: colors.secondaryBackground,
  },
  bodyInput: {
    height: 100,
    textAlignVertical: 'top', 
  },
  saveButton: {
    backgroundColor: colors.buttonLink,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 16,
  },
  saveButtonText: {
    color: colors.primaryBackground,
    fontSize: 18,
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 8,
    marginBottom: 8,
  },
});
