import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Modal, FlatList } from 'react-native';
import CustomText from './CustomText';

const TaskCard = ({ task }) => {
  const [status, setStatus] = useState(task.status);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const statuses = [
    { name: 'para fazer', color: '#ccc' },
    { name: 'em progresso', color: '#00AFFF' },
    { name: 'concluído', color: '#4CAF50' },
  ];

  const toggleStatus = () => {
    setIsModalVisible(true);
  };

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus.name);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.card}>
      <View>
        <CustomText style={styles.title}>{task.title}</CustomText>
        <CustomText style={styles.info}>
          {task.date} - {task.responsible}
        </CustomText>
      </View>

      <TouchableOpacity
        onPress={toggleStatus}
        style={[styles.statusButton, { backgroundColor: getStatusColor(status) }]}
      >
        <CustomText style={styles.statusText}>{status}</CustomText>
      </TouchableOpacity>

      {/* Modal com lista de status */}
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="fade"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <FlatList
              data={statuses}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[styles.statusOption, { backgroundColor: item.color }]}
                  onPress={() => handleStatusChange(item)}
                >
                  <CustomText style={styles.statusText}>{item.name}</CustomText>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const getStatusColor = (status) => {
  if (status === 'concluído') return '#4CAF50';
  if (status === 'em progresso') return '#00AFFF';
  return '#ccc'; // 'para fazer' status
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00AFFF',
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  info: {
    fontSize: 14,
    color: '#777',
  },
  statusButton: {
    padding: 8,
    borderRadius: 8,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  statusOption: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    width: '100%',
    alignItems: 'center',
  },
});

export default TaskCard;
