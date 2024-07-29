import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import PerfilScreen from "./src/screens/PerfilScreen";
import TaskScreen from './src/screens/TaskScreen';
import NotesScreen from './src/screens/NotesScreen';
import CreateNoteScreen from './src/screens/CreateNoteScreen';
import EditNoteScreen from './src/screens/EditNoteScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// navegación por tab despues del inicio
function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Perfil" component={PerfilScreen} />
      <Tab.Screen name="Task" component={TaskScreen} />
      <Tab.Screen name="Notes" component={NotesScreen} />
    </Tab.Navigator>
  );
}

// Configuración principal de la aplicación
export default function App() {
  return (
    // Proveedor de Redux para que todos los componentes tengan acceso al store
    <Provider store={store}>
      {/* NavigationContainer maneja la navegación de la aplicación */}
      <NavigationContainer>
        {/* Stack.Navigator maneja nuestras pantallas */}
        <Stack.Navigator initialRouteName="Welcome">
          {/* las pantallas y sus componentes */}
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="CreateNoteScreen" component={CreateNoteScreen} />
          <Stack.Screen name="EditNoteScreen" component={EditNoteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
