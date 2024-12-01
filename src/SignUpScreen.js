import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import InputField from '../components/InputField';
import FilledButton from '../components/FilledButton';
import OutlinedButton from '../components/OutlinedButton';
import CustomText from '../components/CustomText';
import logo from '../assets/logoTaskly.png';

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <CustomText style={styles.title}>Taskly</CustomText>

      <CustomText style={styles.subtitle}>Criar conta</CustomText>

      <View style={styles.form}>
        <InputField placeholder="usuário" />
        <InputField placeholder="email" />
        <InputField placeholder="senha" secureTextEntry />
      </View>

      <FilledButton title="Cadastrar" onPress={() => navigation.navigate('Tasks')} />
      <OutlinedButton title="cancelar" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00AFFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
    marginBottom: 20,
  },
  form: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default SignUpScreen;
