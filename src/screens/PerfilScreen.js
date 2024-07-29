import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image, Button, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import colors from '../theme/colors';


export default function PerfilScreen({ navigation }) {
  const [image, setImage] = useState(null);

  // Función solicita permisos y podemos seleccionar
  //una imagen de la galería o tomar la foto
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
              setImage(result.assets[0].uri);
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
              setImage(result.assets[0].uri);
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
    <View style={styles.container}>
      {/* Imagen de perfil */}
      <View style={styles.imageContainer}>
        {image ? (
          <Image source={{ uri: image }} style={styles.profileImage} />
        ) : (
          <Image source={require('../assets/default_profile.png')} style={styles.profileImage} />
        )}
        <Button title="Cargar Imagen" onPress={pickImage} />
      </View>
      {/* Información del usuario */}
      <Text style={styles.name}>Juan Pérez</Text>
      <Text style={styles.email}>juan.perez@example.com</Text>
      {/* Botones para navegar a Task y Notes */}
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate('Task')}
      >
        <Text style={styles.pressableText}>Task</Text>
      </Pressable>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate('Notes')}
      >
        <Text style={styles.pressableText}>Notes</Text>
      </Pressable>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate('Welcome')}
      >
        <Text style={styles.pressableText}>cerrar sesion</Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  profileImagePlaceholder: {
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: colors.secondaryBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImageText: {
    color: colors.secondaryText,
    fontSize: 18,
  },
  name: {
    fontSize: 24,
    color: colors.primaryText,
    marginTop: 16,
  },
  email: {
    fontSize: 18,
    color: colors.secondaryText,
    marginBottom: 16,
  },
  pressable: {
    backgroundColor: colors.buttonLink,
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
  },
  pressableText: {
    color: colors.primaryBackground,
    fontSize: 18,
  },
});
