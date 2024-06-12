import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Pressable } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../components/FirebaseConfig.js'

import Login from './Login.js'


function Cadastro() {

  const navigation = useNavigation(); 
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cep, setCep] = useState('');

  const handleNavigateToLogin = () => {
    navigation.navigate('Login'); 
  };

  const handleCadastro = () => {
  addDoc(collection(db, "usuarios"), {
    nome: nome,
    email: email,
    cep: cep,
    telefone: telefone,
  });
  createUserWithEmailAndPassword(auth, email, senha)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    setUser(user)
  })
  };

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Fazer cadastro</Text>
    
        <TextInput
        style={styles.inputField}
        class="nome"
        placeholder="Nome Completo"
        onChangeText={(text) => setNome(text)}
        value={nome}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        />

        <TextInput
        style={styles.inputField}
        class="email"
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        />

        <TextInput
        style={styles.inputField}
        class="senha"
        placeholder="Senha"
        onChangeText={(text) => setSenha(text)}
        value={senha}
        secureTextEntry={true}
        />
    
        <TextInput
        style={styles.inputField}
        class="cep"
        placeholder="CEP"
        onChangeText={(text) => setCep(text)}
        value={cep}
        keyboardType="number-pad"
        />
    
        <TextInput
        style={styles.inputField}
        class="telefone"
        placeholder="Telefone"
        onChangeText={(text) => setTelefone(text)}
        value={telefone}
        keyboardType="number-pad"
        />

        <Pressable style={styles.submitButton} onPress={handleCadastro}>
          <Text style={styles.textButton}>Fazer cadastro</Text>
        </Pressable>

        <Pressable style={styles.submitButton} onPress={handleNavigateToLogin}>
          <Text style={styles.textButton}>Ir para o Login</Text>
        </Pressable>

      </View>
      </KeyboardAvoidingView>
    );
   }

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
          textAlign: 'center'
      },
  });
    
export default Cadastro;