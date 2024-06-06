import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./screens/Home.js";
import Login from "./screens/Login.js";
import Cadastro from "./screens/Cadastro.js";
import Agendamentos from './screens/Agendamentos.js';
import Perfil from './screens/Perfil.js';
import Servicos from './screens/Servicos.js'

const Stack = createNativeStackNavigator();


export default function App() {

  return(
  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Cadastro" component={Cadastro} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Perfil" component={Perfil} />
    <Stack.Screen name="Servicos" component={Servicos} />
    <Stack.Screen name="Agendamentos" component={Agendamentos} />
  </Stack.Navigator>
  </NavigationContainer>
);
}
