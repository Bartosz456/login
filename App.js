import { StatusBar } from 'expo-status-bar';
import { cloneElement } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';

// function registration() {
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (text) => {
//     setInputValue(text);
//   };

//   const handleSubmit = () => {
//     console.log('Wartość wprowadzona przez użytkowanika: ', inputValue);
//   }

// }

export default login = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./assets/logo.png')} />
        <Text style={styles.title}>GWIZD</Text>
        <Text style={styles.log}>Logowanie</Text>
      </View>
      <View style={styles.content}>
      <TextInput 
        style={styles.input}
        //onChangeText={handleInputChange}
        //value={inputValue}
        placeholder='Adres e-mail'
      />
      <TextInput style={styles.input} placeholder='Hasło' />
      <View style={{justifyContent: 'center', alignContent: 'center'}}>
        <TouchableOpacity style={styles.lose}><Text style={styles.lose_text}>Zapomniałem hasła</Text></TouchableOpacity>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}><TouchableOpacity style={styles.login}><Text style={styles.login_text}>Zaloguj</Text></TouchableOpacity></View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
  },
  logo: {
    marginTop: 50,
    alignItems: 'center',
  },
  title: {
    padding: 30,
    fontSize: 40,
    color: '#000',
  },
  log: {
    fontSize: 24,
    paddingBottom: 10,
    borderBottomColor: 'orange',
    borderBottomWidth: 2,
  },
  input: {
    marginLeft: 30,
    marginRight: 30,
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'orange',
  },
  login: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#fa0000',
    width: '80%',
    height: 45,
    borderRadius: 10,
    elevation: 5,
  },
  login_text: {
    fontSize: 25,
    color: '#fff',
  },
  lose_text :{
    textAlign: 'right',
    fontSize: 16,
    color: '#eba059',
    marginRight: 30,
    marginTop: 15,
  },
});
