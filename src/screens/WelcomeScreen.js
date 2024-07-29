import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import colors from '../theme/colors';


export default function WelcomeScreen({ navigation }) {
return (
    <View style={styles.container}>
      {/* logo (Header) */}
    <View style={styles.header}>
        <Image 
            style={styles.tinyLogo}
            source={require('../assets/default_profile.png')}
        />
    </View>


        <View style={styles.content}>
            <Text style={styles.title}>Memo Life</Text>
            <Text style={styles.title}>Notas y tareas al instante</Text>
            <Text style={styles.title}>bienvenido</Text>

        {/* vamos al Login */}
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
        >
            <Text style={styles.buttonText}>Login / inicio de sesion</Text>
        </TouchableOpacity>
        
        <Text style={styles.title}> aun no tienes tu cuenta?</Text>
        
        {/* vamos a register */}
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Register')}
        >
            <Text style={styles.buttonText}>Create Account / registro</Text>
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
    justifyContent: 'flex-start',
},
header: {
    width: '100%',
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 15,
},
tinyLogo: {
    width: 200,
    height: 200,
},
content: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
},
title: {
    fontSize: 24,
    color: colors.primaryText,
    marginBottom: 16,
},
button: {
    backgroundColor: colors.buttonLink,
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
},
buttonText: {
    color: colors.primaryBackground,
    fontSize: 18,
},
});
