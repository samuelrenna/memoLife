import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Pressable, Text, Image, ScrollView, Button, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateNote } from '../redux/notesSlice';
import { useRoute, useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import colors from '../theme/colors';

export default function EditNoteScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  //traemos la nota para editar
  const [title, setTitle] = useState(route.params.note.title);
  const [body, setBody] = useState(route.params.note.body);
  const [images, setImages] = useState(route.params.note.images);

  //guarda la nota se llama mas adelante
  const saveNote = () => {
    dispatch(updateNote({
      id: route.params.note.id,
      title,
      body,
      images
    }));
    navigation.goBack();
  };

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
      <TextInput
        style={styles.input}
        placeholder="Título de la nota"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.bodyInput]}
        placeholder="Cuerpo de la nota"
        value={body}
        onChangeText={setBody}
        multiline
      />
      <Button title="Agregar Imagen" onPress={pickImage} />
      <View style={styles.imagesContainer}>
        {images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.image} />
        ))}
      </View>
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
