import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Login from './Login';

function Cadastro() {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    function handleRegistro() {
        navigation.navigate('Login')
    };
  
    return (
      <View style={styles.container}>
      <Image source={require('../assets/favicon.png')} style={styles.logo} />
        <Text style={styles.title}>Cadastrar</Text>
  
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
  
        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
  
         <Pressable title="Entrar" style={styles.Pressable} onPress={handleRegistro} >
         <Text style={styles.textPressable}>Fazer Cadastro</Text>
         </Pressable>
      </View>
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
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3B5341', 
        marginBottom: 20,
        marginTop: 0
      },
      input: {
          width: 300,
          padding: 10,
          borderWidth: 1,
          borderColor: '#333', 
          backgroundColor: '#fff', 
          color: '#00C2FF', 
          marginBottom: 10,
        },      
      Pressable: {
        width: 300,
        height: 40,
        padding: 10,
        backgroundColor: '#3B5341', 
        color: '#fff',
        borderRadius: 5, 
      },
      textPressable: {
        color: '#fff',
        textAlign: "center"
      },
      logo: {
          width: 300, 
          height: 300, 
          resizeMode: 'contain', 
          marginBottom: 0,
        },
      });
export default Cadastro;
