import React, {useState} from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native';
import { collection, addDoc, query, where, getDocs, deleteDoc, doc  } from 'firebase/firestore';
import { db } from '../database/firebase';

const CargarPokemonesScreen = () => {

    const [state, setState] = useState({ 
        nombre: '',
        numero: '',
        tipos: '',
        hp: '',
        ataque: '',
        defensa: '',
        velocidad: ''
    })

    const handleChangeText = (type, value) => {
        setState({...state, [type]: value})
    }

    const addNewPokemon = async () =>{
        if(state.nombre === '' ||
        state.numero === '' ||
        state.tipos === '' ||
        state.hp === '' ||
        state.ataque === '' ||
        state.defensa === '' ||
        state.velocidad === ''){
            alert('¡Por favor llene todos los campos!')
        }else{
            const collectionRef = collection(db, "usersPokemones");
            await addDoc(collectionRef, state);
            alert('Guardado')
        }
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Nombre"
                    onChange={(value) => handleChangeText('nombre', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Número"
                    onChange={(value) => handleChangeText('numero', value)}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Tipos"
                    onChange={(value) => handleChangeText('tipos', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="HP"
                    onChange={(value) => handleChangeText('hp', value)}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Ataque"
                    onChange={(value) => handleChangeText('ataque', value)}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Defensa"
                    onChange={(value) => handleChangeText('defensa', value)}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Velocidad"
                    onChange={(value) => handleChangeText('velocidad', value)}
                    keyboardType="numeric"
                />
            </View>
            <View>
                <Button title="Cargar Pokémon" onPress={() => addNewPokemon()}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 35
    },
    inputGroup:{
        flex: 1,
        padding:0,
        marginBottom:15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    }
})

export default CargarPokemonesScreen