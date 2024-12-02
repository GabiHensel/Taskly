import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import CustomText from './CustomText';
import TaskStatusModal from './TaskStatusModal';

const TaskCard = ({ task, setStatus }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(true);
  };

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    setIsModalVisible(false);
  };

  const getStatusColor = (status) => {
    if (status === 'Concluído') return '#4CAF50';
    if (status === 'Em progresso') return '#00AFFF';
    return '#ccc';
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
        onPress={toggleModal}
        style={[styles.statusButton, { backgroundColor: getStatusColor(task.status) }]}>
        <CustomText style={styles.statusText}>{task.status}</CustomText>
      </TouchableOpacity>

      <TaskStatusModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onStatusChange={handleStatusChange}
      />
    </View>
  );
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
});

export default TaskCard;
