import React from 'react';
import { View, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import CustomText from './CustomText';

const TaskStatusModal = ({ isVisible, onClose, onStatusChange }) => {
  return (
    <Modal
      visible={isVisible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <CustomText style={styles.modalTitle}>Selecione o Status</CustomText>

          <TouchableOpacity
            style={[styles.modalButton, { backgroundColor: '#ccc' }]}
            onPress={() => {
              onStatusChange('Para fazer');
              onClose();
            }}
          >
            <CustomText style={styles.modalButtonText}>Para fazer</CustomText>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.modalButton, { backgroundColor: '#00AFFF' }]}
            onPress={() => {
              onStatusChange('Em progresso');
              onClose();
            }}
          >
            <CustomText style={styles.modalButtonText}>Em progresso</CustomText>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.modalButton, { backgroundColor: '#4CAF50' }]}
            onPress={() => {
              onStatusChange('Concluído');
              onClose();
            }}
          >
            <CustomText style={styles.modalButtonText}>Concluído</CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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

export default TaskStatusModal;
