import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

import WebViewScreen from './Screens/WebViewScreen';
import CargarPokemonesScreen from './Screens/CargarPokemonesScreen';

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Web" component={WebViewScreen}/>
      <Stack.Screen name="Cargar" component={CargarPokemonesScreen}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});