import React, { useState } from "react";
import { View, Text, Image, KeyboardAvoidingView, StyleSheet, Button, onPress, TouchableOpacity } from "react-native";
import { useNavigation, handleNavigateToLogin, handleNavigateToCadastro, NavigationContainer } from "@react-navigation/native";

import Login from "./Login";
import Cadastro from "./Cadastro";


function Home() {

    const navigation = useNavigation(); 
  
    const handleNavigateToLogin = () => {
      navigation.navigate('Login'); 
    };

    const handleNavigateToCadastro = () => {
      navigation.navigate('Cadastro'); 
    };
  
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../assets/favicon.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>Bem-vindo(a)! Com a Glambook sua beleza cabe na sua rotina!</Text>
        </View>
  
        <View style={styles.buttonsContainer}>
          <Text>Já Possui uma conta?</Text>
          <Button
            title="Entrar"
            onPress={handleNavigateToLogin}
            style={styles.loginButton}
          />
          <Text>Primeira vez por aqui?</Text>
          <Button
            title="Cadastrar"
            onPress={handleNavigateToCadastro}
            style={styles.cadastroButton}
          />
        </View>
      </KeyboardAvoidingView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
    },
    header: {
      alignItems: 'center',
      marginBottom: 20,
    },
    logo: {
      width: 150,
      height: 150,
      resizeMode: 'contain',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333', 
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    loginButton: {
      backgroundColor: '#007bff', 
      padding: 10,
      borderRadius: 5,
    },
    cadastroButton: {
      backgroundColor: '#28a745', 
      padding: 10,
      borderRadius: 5,
    },
  });

export default Home;
