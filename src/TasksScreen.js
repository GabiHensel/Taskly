import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import CustomText from '../components/CustomText';
import TaskCard from '../components/TaskCard';
import { FontAwesome } from '@expo/vector-icons';

const TasksScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Tirar o lixo',
      date: '01/11',
      priority: 'Alta',
      responsible: 'Ana',
      description: 'Tirar os lixos da casa e separar entre orgânico e reciclável. Tirar antes das 8hrs.',
      status: 'Para fazer',
    },
    {
      id: '2',
      title: 'Estudar para a prova',
      date: '10/11',
      priority: 'Média',
      responsible: 'Gabi',
      description: 'Revisar os capítulos do livro.',
      status: 'Concluído',
    },
    {
      id: '3',
      title: 'Fazer o trabalho da faculdade',
      date: '25/11',
      priority: 'Alta',
      responsible: 'Gabi',
      description: 'Trabalho final sobre gestão de projetos.',
      status: 'Em progresso',
    },
    {
      id: '4',
      title: 'Regar flores',
      date: '04/11',
      priority: 'Baixa',
      responsible: 'Ana',
      description: 'Regar as flores do jardim.',
      status: 'Para fazer',
    },
    {
      id: '5',
      title: 'Fazer exames',
      date: '10/12',
      priority: 'Alta',
      responsible: 'Ana',
      description: 'Realizar exames de rotina.',
      status: 'Para fazer',
    },
  ]);

  const handleStatusChange = (taskId, newStatus) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomText style={styles.title}>Tarefas</CustomText>
        <TouchableOpacity
          onPress={() => navigation.navigate('UserProfile')}
          style={styles.profileButton}
        >
          <FontAwesome name="user" size={24} color="#00AFFF" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ViewTask', { task: item, updateTask: handleStatusChange })}
          >
            <TaskCard task={item} setStatus={(newStatus) => handleStatusChange(item.id, newStatus)} />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('CreateTask')}
      >
        <CustomText style={styles.addButtonText}>Adicionar Tarefa</CustomText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20
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
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  addButton: {
    backgroundColor: '#00AFFF',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TasksScreen;
