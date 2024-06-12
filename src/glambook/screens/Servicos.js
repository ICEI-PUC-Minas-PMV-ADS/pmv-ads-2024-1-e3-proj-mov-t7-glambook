import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, KeyboardAvoidingView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../components/FirebaseConfig.js'

import Agendamentos from './Agendamentos';

function Servicos() {


    const navigation = useNavigation();
    const [servico, setServico] = useState('');
    const [estabelecimento, setEstabelecimento] = useState('');
    const [data, setData] = useState('');
    const [email, setEmail] = useState('');

    const handleAgendamentos = () => {
      addDoc(collection(db, "agendamentos"), {
        servico: servico,
        estabelecimento: estabelecimento,
        data: data,
        email: email,
      });
    }
      return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>

            <View style={styles.servicesContainer}>
            
                <Text style={styles.servicesTitle}>Serviços Desejados</Text>

                <Text style={styles.text}>Selecione um serviço</Text>

                <RNPickerSelect
                  style={styles.input}
                  onValueChange={(value) => setServico(value)}
                  value={servico}
                    items={[
                      { label: 'Manicure', value: 'manicure' },
                      { label: 'Pedicure', value: 'pedicure' },
                      { label: 'Hidratação', value: 'hidratacao' },
                      { label: 'Escova', value: 'escova' },
                      { label: 'Progressiva', value: 'progressiva' },
                      { label: 'Cachos', value: 'cachos' },
                      { label: 'Massagem', value: 'massagem' },
                      { label: 'Depilação', value: 'depilacao' },
                  ]}
                />

                <Text style={styles.text}>Selecione um estabelecimento</Text>
                
                <RNPickerSelect
                  style={styles.input}
                  onValueChange={(value) => setEstabelecimento(value)}
                  value={estabelecimento}
                    items={[
                      { label: 'The J', value: 'the j' },
                      { label: 'Socila', value: 'socila' },
                      { label: 'Beauty Co.', value: 'beauty co' },
                      { label: 'Sempre Linda', value: 'sempre linda' },
                      { label: 'Salão da Rose', value: 'salao da rose' },
                  ]}
                />

              <Text style={styles.text}>Informe uma data de preferência</Text>
                  
                <TextInput
                  style={styles.input}
                  placeholder="DD/MM"
                  keyboardType="date"
                  onChangeText={(text) => setData(text)}
                  value={data}
                />

              <Text style={styles.text}>Informe seu e_mail</Text>

                <TextInput
                  style={styles.input}
                  placeholder="exemplo@gmail.com"
                  keyboardType="email-address"
                  onChangeText={(text) => setEmail(text)}
                  value={email}
                />

            </View>
                
            <Button
                title="Agendar"
                style={styles.submitButton}
                onPress={() => {
                  handleAgendamentos();
                  alert('Agendamento realizado!');
                  navigation.navigate('Agendamentos')
                }}
            />
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
  servicesContainer: {
    flex: 1,
    width: '90%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 15,
  },
  servicesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3B5341',
    marginBottom: 20,
  },
  text: {
    marginBottom: 10,
  },
  input: {
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

export default Servicos;