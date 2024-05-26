import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, KeyboardAvoidingView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Cadastro() {

  const navigation = useNavigation();
  const emailCorreto = "glambook@gmail.com"
  const senhaCorreta = "123senha**"

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Fazer cadastro</Text>
    
        <TextInput
          style={styles.inputField}
          placeholder="Nome Completo"
          onChangeText={(text) => handleInputChange('nomeCompleto', text)}
        />

        <TextInput
          style={styles.inputField}
          placeholder="Email"
          onChangeText={(text) => handleInputChange('Email', text)}
        />

        <TextInput
          style={styles.inputField}
          placeholder="Senha"
          onChangeText={(text) => handleInputChange('Senha', text)}
        />
    
        <TextInput
          style={styles.inputField}
          placeholder="CEP"
          onChangeText={(text) => handleInputChange('CEP', text)}
        />
    
        <TextInput
          style={styles.inputField}
          placeholder="Telefone"
          onChangeText={(text) => handleInputChange('telefone', text)}
          keyboardType="number-pad"
        />

        <Pressable style={styles.submitButton} onPress={() => navigation.navigate('Perfil')} >
          <Text style={styles.textButton}>Ir para o seu perfil</Text>
        </Pressable>

      </View>
      </KeyboardAvoidingView>
    );
    }; 

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#1e212d',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      },
      formContainer: {
        width: '90%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      formTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3B5341',
        marginBottom: 20,
      },
      inputField: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
      },
      submitButton: {
        backgroundColor: '#3B5341',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
      },
      textButton: {
        color: '#fff',
      }
    });
    
export default Cadastro;
