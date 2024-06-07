import React, { useState } from "react";
import { View, Text, Image, KeyboardAvoidingView, StyleSheet, Button, onPress, TouchableOpacity, Pressable } from "react-native";
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
          <Text style={styles.title}>Sua beleza cabe na sua rotina!</Text>
        </View>
  
        <View style={styles.buttonsContainer}>

          <Text style={styles.Text}>JÁ POSSUI UMA CONTA?</Text>

          <Pressable style={styles.button} onPress={handleNavigateToLogin}>
            <Text styles={styles.textButton}>LOGIN</Text>
          </Pressable>

          <Text style={styles.Text}>PRIMEIRA VEZ POR AQUI?</Text>

          <Pressable style={styles.button} onPress={handleNavigateToCadastro}>
            <Text styles={styles.textButton}>CADASTRAR</Text>
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
      padding: 10,
    },
    header: {
      alignItems: 'center',
      marginBottom: 10,
      marginTop: 0,
    },
    logo: {
      width: 280,
      height: 280,  
      marginBottom: 0,
    },      
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#3B5341', 
      marginBottom: 40,
      marginTop: 0,
    },
    buttonsContainer: {
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      marginTop: 20, 
    },
    button: {
      backgroundColor: '#3B5341',
      padding: 10,
      borderRadius: 5,
      marginBottom: 25, 
      width: 100,
    },
    textButton: {
      color: '#fff',
      textAlign: "center"
    },
    Text: {
      color: '#fff',
      marginBottom: 20,
    },
    
  });

export default Home;