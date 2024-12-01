import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from '../components/CustomText';
import { Ionicons } from '@expo/vector-icons';

const UserProfileScreen = ({ navigation }) => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  // Abrir modal de exclusão
  const showDeleteModal = () => setDeleteModalVisible(true);

  // Fechar modal de exclusão
  const closeDeleteModal = () => setDeleteModalVisible(false);

  // Confirmar exclusão do perfil
  const confirmDelete = () => {
    console.log('Perfil excluído com sucesso!');
    closeDeleteModal();
    navigation.navigate('Login'); // Redireciona para a tela de login após a exclusão
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <CustomText style={styles.title}>Usuário</CustomText>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} color="#00AFFF" />
        </TouchableOpacity>
      </View>

      {/* Dados do usuário */}
      <CustomText style={styles.username}>Gabi</CustomText>
      <CustomText style={styles.email}>gabriela@email.com</CustomText>

      {/* Botão de Logout */}
      <TouchableOpacity
        style={[styles.logoutButton]}
        onPress={() => navigation.navigate('Login')}
      >
        <CustomText style={styles.logoutButtonText}>Sair</CustomText>
      </TouchableOpacity>

      {/* Espaço para preencher a tela acima dos botões */}
      <View style={styles.content}></View>

      {/* Botões de ação: Editar e Excluir */}
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

      {/* Modal de confirmação de exclusão */}
      {deleteModalVisible && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <CustomText style={styles.modalTitle}>Confirmar Exclusão?</CustomText>

            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: '#ccc' }]}
              onPress={closeDeleteModal} // Botão cancelar
            >
              <CustomText style={styles.modalButtonText}>Cancelar</CustomText>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: '#FF0000' }]}
              onPress={confirmDelete} // Botão confirmar exclusão
            >
              <CustomText style={styles.modalButtonText}>Confirmar</CustomText>
            </TouchableOpacity>
          </View>
        </View>
      )}
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
  profileButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
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
    flex: 1, // Preenche o espaço restante para empurrar os botões para baixo
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 20, // Para garantir que o espaçamento inferior fique adequado
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    width: '100%',
    paddingVertical: 12,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserProfileScreen;
