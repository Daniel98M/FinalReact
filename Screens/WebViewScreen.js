import React from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewScreen = (props) => { 
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Pokedex</Text>
    <View style={styles.webviewContainer}>
      <WebView source={{ uri: 'https://react-pokemon-danielm.web.app/' }} />
    </View>
    <View style={styles.buttonContainer}>
        <Button title="Cargar Pokémon" onPress={props.navigation.navigate('Cargar')}/>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    webviewContainer: {
      flex: 3,
      width: '100%',
      alignSelf: 'center',
    },
    buttonContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'blue',
    },
  });

export default WebViewScreen