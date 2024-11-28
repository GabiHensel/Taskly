import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import CustomText from '../components/CustomText';
import TaskCard from '../components/TaskCard';

const TasksScreen = () => {
  const tasks = [
    { id: '1', title: 'Tirar o lixo', date: '01/11', responsible: 'Ana', status: 'para fazer' },
    { id: '2', title: 'Estudar para a prova', date: '10/11', responsible: 'Gabi', status: 'concluído' },
    { id: '3', title: 'Fazer o trabalho da faculdade', date: '25/11', responsible: 'Gabi', status: 'em progresso' },
    { id: '4', title: 'Regar flores', date: '04/11', responsible: 'Ana', status: 'para fazer' },
    { id: '5', title: 'Fazer exames', date: '10/12', responsible: 'Ana', status: 'para fazer' },
  ];

  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Tarefas</CustomText>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskCard task={item} />}
        contentContainerStyle={styles.listContainer}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => console.log('Adicionar tarefa')}
      >
        <CustomText style={styles.addButtonText}>adicionar tarefa</CustomText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00AFFF',
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  addButton: {
    backgroundColor: '#00AFFF',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TasksScreen;
