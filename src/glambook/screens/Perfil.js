import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Agendamentos from './Agendamentos';
import Servicos from './Servicos.js'
import Home from './Home.js'

function Perfil() {

  const navigation = useNavigation();

  const Agendamentos = () => {
    navigation.navigate('Agendamentos');
  };

  const Servicos = () => {
    navigation.navigate('Servicos');
  };

  const Home = () => {
    navigation.navigate('Home');
  };

  return (

    <View style={styles.container}>

      <View style={styles.header}>

          <Image
            source={require('../assets/favicon.png')}
            style={styles.logo}
          />

      </View>

      <View>

        <Text style={styles.title}>Bem vindo(a)</Text>

      </View>

      <View style={styles.buttonsContainer}>

        <TouchableOpacity style={styles.button} onPress={Agendamentos}>

          <Text style={styles.btntext}>Agendamentos</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={Servicos}>

          <Text style={styles.btntext}>Serviços</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={Home}>

          <Text style={styles.btntext}>Sair</Text>

        </TouchableOpacity>

      </View>
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
        color: '#fff', 
        padding: 10,
        borderRadius: 5,
        marginBottom: 25,
        width: 200, 
      },

      btntext: {
        color: '#fff',
        textAlign: 'center'
      }

});

export default Perfil;