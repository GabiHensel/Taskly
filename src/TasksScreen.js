import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import CustomText from '../components/CustomText';
import TaskCard from '../components/TaskCard';
import OutlinedButton from '../components/OutlinedButton';
import { FontAwesome } from '@expo/vector-icons'; // Importa o ícone

const TasksScreen = ({ navigation }) => {
  const tasks = [
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
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomText style={styles.title}>Tarefas</CustomText>
        {/* Substituir texto por ícone */}
        <TouchableOpacity
          onPress={() => console.log('Navegar para o perfil')}
          style={styles.profileButton}
        >
          <FontAwesome name="user" size={24} color="#00AFFF" /> {/* Ícone de usuário */}
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ViewTask', { task: item })}
          >
            <TaskCard task={item} />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('CreateTask')}
      >
        <CustomText style={styles.addButtonText}>adicionar tarefa</CustomText>
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
