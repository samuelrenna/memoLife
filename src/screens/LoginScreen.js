import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import colors from '../theme/colors';


export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {/* correo electrónico */}
      <TextInput
        style={styles.input}
        placeholder="Email / correo electronico"
        placeholderTextColor={colors.secondaryText}
      />
      {/* contraseña y esconde la contraseña */}
      <TextInput
        style={styles.input}
        placeholder="Password / contraseña"
        placeholderTextColor={colors.secondaryText}
        secureTextEntry
      />
      {/* Botón iniciar sesión */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Main')}
      >
        <Text style={styles.buttonText}>Login / inicio de sesión</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Forgot Password / olvidaste contraseña</Text>
      {/* Botón recuperar la contraseña */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Forgot Password / olvidaste contraseña</Text>
      </TouchableOpacity>
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
  input: {
    height: 40,
    borderColor: colors.secondaryText,
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    width: '80%',
    backgroundColor: colors.secondaryBackground,
  },
  button: {
    backgroundColor: colors.buttonLink,
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: colors.primaryText,
    marginBottom: 16,
  },
  buttonText: {
    color: colors.primaryBackground,
    fontSize: 18,
  },
});
