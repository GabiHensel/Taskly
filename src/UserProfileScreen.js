import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from '../components/CustomText';
import { Ionicons } from '@expo/vector-icons';
import DeleteConfirmationModal from '../components/DeleteConfirmationModal';

const UserProfileScreen = ({ navigation }) => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const showDeleteModal = () => setDeleteModalVisible(true);

  const closeDeleteModal = () => setDeleteModalVisible(false);

  const confirmDelete = () => {
    console.log('Perfil excluído com sucesso!');
    closeDeleteModal();
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomText style={styles.title}>Usuário</CustomText>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} color="#00AFFF" />
        </TouchableOpacity>
      </View>

      <CustomText style={styles.username}>Gabi</CustomText>
      <CustomText style={styles.email}>gabriela@email.com</CustomText>

      <TouchableOpacity
        style={[styles.logoutButton]}
        onPress={() => navigation.navigate('Login')}
      >
        <CustomText style={styles.logoutButtonText}>Sair</CustomText>
      </TouchableOpacity>

      <View style={styles.content}></View>

      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={[styles.button, styles.editButton]}
          onPress={() => navigation.navigate('EditProfile')}
        >
          <CustomText style={styles.buttonText}>Editar</CustomText>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={showDeleteModal}
        >
          <CustomText style={[styles.buttonText, styles.deleteButtonText]}>Excluir</CustomText>
        </TouchableOpacity>
      </View>

      <DeleteConfirmationModal
        isVisible={deleteModalVisible}
        onCancel={closeDeleteModal}
        onConfirm={confirmDelete}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00AFFF',
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    paddingHorizontal: 20,
  },
  email: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  logoutButton: {
    backgroundColor: '#00AFFF',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginHorizontal: 30,
    marginBottom: 20,
    width: '30%',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    width: '40%',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 10,
  },
  editButton: {
    backgroundColor: '#00AFFF',
  },
  deleteButton: {
    backgroundColor: '#FF0000',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButtonText: {
    color: '#fff',
  },
});

export default UserProfileScreen;
