import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import FilledButton from '../components/FilledButton';
import OutlinedButton from '../components/OutlinedButton';
import InputField from '../components/InputField';
import CustomText from '../components/CustomText';
import logo from '../assets/logoTaskly.png';

const LoginScreen = ({ navigation }) => { // Adicionando a props navigation
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <CustomText style={styles.title}>Taskly</CustomText>

      <View style={styles.loginContainer}>
        <InputField placeholder="Usuário" />
        <InputField placeholder="Senha" secureTextEntry />
        <FilledButton
          title="Entrar"
          onPress={() => navigation.navigate('Tasks')} // Navega para a tela Tasks
        />
      </View>

      <View style={styles.signupContainer}>
        <CustomText style={styles.text}>Ainda não possui uma conta?</CustomText>
        <OutlinedButton
          title="Criar conta"
          onPress={() => console.log('Criar conta')} // Ação do botão "Criar conta"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00AFFF',
    marginBottom: 30,
  },
  loginContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  signupContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    color: '#777',
    fontSize: 16,
    marginBottom: 6,
  },
});

export default LoginScreen;
