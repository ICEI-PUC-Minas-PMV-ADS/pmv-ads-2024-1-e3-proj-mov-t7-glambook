import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../components/FirebaseConfig.js"

function Agendamentos() {

  const [agendamento, setAgendamento] = useState([]);
  
      useEffect(() => {
        async function getData() {
            const agendaRef = await getDocs(collection(db, "agendamentos"));
            agendaRef
            .onSnapshot(
              querySnapshot => {
                const agendamento = []
                querySnapshot.forEach((doc) => {
                  const {data, email, estabelecimento, servico} = doc.data()
                  agendamento.push({
                    id: doc.id,
                    data,
                    email,
                    estabelecimento,
                    servico,
                  })
              })
              setAgendamento(agendamento)
              }
            )}}, []);

  console.log(agendamento);

  return (
    <View style={styles.body}>
      <FlatList
        style={styles.flatlist}
        data={agendamento}
        numColumns={1}
        renderItem={({item}) => (
            <View style={styles.container}>
              <Text style={styles.itemData}>{item.data}</Text>
              <Text style={styles.itemEmail}>{item.email}</Text>
              <Text style={styles.itemEstabelecimento}>{item.estabelecimento}</Text>
              <Text style={styles.itemServico}>{item.servico}</Text>
            </View>
        )}
      />
    </View>
  )}

  const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 20,
    marginTop: 100,
    backgroundColor: '#1e212d',
  },
  flatlist: {
    flex: 1,
    backgroundColor: '#3B5341',
  },
  container: {
    flex: 1,
    backgroundColor: '#1e212d',
  },
  itemData: {
    flex: 1,
    color: 'black',
  },
  itemEmail: {
    flex: 1,
    color: 'black',
  },
  itemEstabelecimento: {
    flex: 1,
    color: 'black',
  },
  itemServico: {
    flex: 1,
    color: 'black',
  },
});

export default Agendamentos;