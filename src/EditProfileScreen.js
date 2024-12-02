import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from '../components/CustomText';
import InputField from '../components/InputField';
import FilledButton from '../components/FilledButton';
import OutlinedButton from '../components/OutlinedButton';

const EditProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('Gabi');
  const [email, setEmail] = useState('gabriela@email.com');
  const [password, setPassword] = useState('*******');

  const handleSave = () => {
    console.log('Alterações salvas:', { name, email, password });
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Editar perfil</CustomText>

      <View style={styles.formContainer}>
        <InputField
          style={styles.input}
          placeholder="Nome"
          value={name}
          onChangeText={setName}
        />
        <InputField
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <InputField
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={styles.buttonContainer}>
        <FilledButton title="Salvar alterações" onPress={() => navigation.navigate('UserProfile')} />
        <OutlinedButton title="Cancelar" onPress={() => navigation.navigate('UserProfile')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  formContainer: {
    paddingHorizontal: 20,
    flexGrow: 1,
    paddingBottom: 20,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00AFFF',
    marginBottom: 20,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'column',
    gap: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
});

export default EditProfileScreen;
