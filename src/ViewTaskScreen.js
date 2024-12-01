import React, { useState } from 'react';
import { View, Modal, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import CustomText from '../components/CustomText';
import { Ionicons } from '@expo/vector-icons';

const ViewTaskScreen = ({ route, navigation }) => {
  const { task } = route.params;

  const [taskStatus, setTaskStatus] = useState(task.status);
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const showDeleteModal = () => setDeleteModalVisible(true);

  const closeDeleteModal = () => setDeleteModalVisible(false);

  const confirmDelete = () => {
    Alert.alert('Tarefa excluída!', 'A tarefa foi excluída com sucesso.', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('Tasks'),
      },
    ]);
    setDeleteModalVisible(false);
  };

  const showModal = () => setModalVisible(true);

  const closeModal = () => setModalVisible(false);

  const handleStatusChange = (status) => {
    setTaskStatus(status);
    closeModal();
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Para fazer':
        return { backgroundColor: '#ccc' };
      case 'Em progresso':
        return { backgroundColor: '#00AFFF' };
      case 'Concluído':
        return { backgroundColor: '#4CAF50' };
      default:
        return {};
    }
  };

  const statusStyle = getStatusStyle(taskStatus);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomText style={styles.title}>Tarefa</CustomText>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} color="#00AFFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <CustomText style={styles.taskTitle}>{task.title}</CustomText>
        <CustomText style={styles.taskDetail}>Data: {task.date}</CustomText>
        <CustomText style={styles.taskDetail}>Prioridade: {task.priority}</CustomText>
        <CustomText style={styles.taskDetail}>Responsável: {task.responsible}</CustomText>
        <CustomText style={styles.taskDescription}>Descrição: {task.description}</CustomText>

        <TouchableOpacity
          style={[styles.statusButton, statusStyle]}
          onPress={showModal}
        >
          <CustomText style={styles.statusText}>{taskStatus}</CustomText>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.editButton]}
          onPress={() => navigation.navigate('EditTask', { task: task })}
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

      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <CustomText style={styles.modalTitle}>Selecione o Status</CustomText>

            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: '#ccc' }]}
              onPress={() => handleStatusChange('Para fazer')}
            >
              <CustomText style={styles.modalButtonText}>Para fazer</CustomText>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: '#00AFFF' }]}
              onPress={() => handleStatusChange('Em progresso')}
            >
              <CustomText style={styles.modalButtonText}>Em progresso</CustomText>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: '#4CAF50' }]}
              onPress={() => handleStatusChange('Concluído')}
            >
              <CustomText style={styles.modalButtonText}>Concluído</CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        visible={deleteModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={closeDeleteModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <CustomText style={styles.modalTitle}>Confirmar Exclusão?</CustomText>

            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: '#ccc' }]}
              onPress={closeDeleteModal}
            >
              <CustomText style={styles.modalButtonText}>Cancelar</CustomText>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: '#FF0000' }]}
              onPress={confirmDelete}
            >
              <CustomText style={styles.modalButtonText}>Confirmar</CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00AFFF',
  },
  closeButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00AFFF',
  },
  content: {
    flex: 1,
    marginTop: 20,
  },
  taskTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  taskDetail: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  taskDescription: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
    lineHeight: 22,
  },
  statusButton: {
    marginTop: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  statusText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 20,
  },
  editButton: {
    marginRight: 10,
    backgroundColor: '#00AFFF',
  },
  deleteButton: {
    marginLeft: 10,
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

export default ViewTaskScreen;
