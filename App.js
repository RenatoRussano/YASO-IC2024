import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screens/LoginScreen';
import TermsScreen from './src/screens/TermsScreen';
import HomeScreen from './src/screens/HomeScreen';
import EmergencyScreen from './src/screens/EmergencyScreen'; 
import AdicionarVacinaScreen from './src/screens/AdicionarVacinaScreen';
import AdicionarAlergiaScreen from './src/screens/AdicionarAlergiaScreen';
import AdicionarConsultaScreen from './src/screens/AdicionarConsultaScreen';
import AdicionarExameScreen from './src/screens/AdicionarExameScreen';
import AdicionarMedicamentoScreen from './src/screens/AdicionarMedicamentoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="Terms" 
          component={TermsScreen} 
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="Emergency" 
          component={EmergencyScreen} 
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="AdicionarVacina" 
          component={AdicionarVacinaScreen} 
          //options={{ headerShown: false }}
        />
        
        <Stack.Screen 
          name="AdicionarAlergia" 
          component={AdicionarAlergiaScreen} 
          //options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="AdicionarConsulta" 
          component={AdicionarConsultaScreen} 
          //options={{ headerShown: false }}
        />

       <Stack.Screen 
          name="AdicionarExame" 
          component={AdicionarExameScreen} 
          //options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="AdicionarMedicamento" 
          component={AdicionarMedicamentoScreen} 
          //options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
