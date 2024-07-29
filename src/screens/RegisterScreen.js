import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import colors from '../theme/colors';


export default function RegisterScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Registro</Text>
      </View>
      {/* registro */}
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name / Nombre"
          placeholderTextColor={colors.secondaryText}
        />
        <TextInput
          style={styles.input}
          placeholder="Email / correo electronico"
          placeholderTextColor={colors.secondaryText}
        />
        <TextInput
          style={styles.input}
          placeholder="Password / contraseña"
          placeholderTextColor={colors.secondaryText}
        />
        <TextInput
          style={styles.input}
          placeholder="Repeat Password / confirmar contraseña"
          placeholderTextColor={colors.secondaryText}
        />
      </View>
      {/* Botón para crear cuenta y vamos a inicio de sesion */}
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
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
  box: {
    backgroundColor: colors.positiveAction,
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  inputsContainer: {
    width: '80%',
    alignItems: 'center', 
  },
  button: {
    backgroundColor: colors.positiveAction,
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: colors.secondaryText,
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    width: '100%',
    backgroundColor: colors.secondaryBackground,
  },
  title: {
    fontSize: 24,
    color: colors.primaryText,
  },
  buttonText: {
    color: colors.primaryBackground,
    fontSize: 18,
  },
});
