import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, ScrollView, TouchableOpacity, Platform, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomText from '../components/CustomText';
import FilledButton from '../components/FilledButton';
import OutlinedButton from '../components/OutlinedButton';

const EditTaskScreen = ({ route, navigation }) => {
  const { task } = route.params;

  const [taskData, setTaskData] = useState({
    title: task.title || '',
    date: task.date || '',
    priority: task.priority || '',
    status: task.status || '',
    responsible: task.responsible || '',
    description: task.description || '',
  });
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    setTaskData({
      title: task.title || '',
      date: task.date || '',
      priority: task.priority || '',
      status: task.status || '',
      responsible: task.responsible || '',
      description: task.description || '',
    });
  }, [task]);

  const handleInputChange = (field, value) => {
    setTaskData({ ...taskData, [field]: value });
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split('T')[0];
      setTaskData({ ...taskData, date: formattedDate });
    }
  };

  const handleSave = () => {
    console.log('Tarefa editada:', taskData);
    navigation.navigate('Tasks');
  };

  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Editar Tarefa</CustomText>

      <ScrollView contentContainerStyle={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Título"
          value={taskData.title}
          onChangeText={(text) => handleInputChange('title', text)}
        />

        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.inputTouchable}>
          <CustomText style={styles.dateText}>
            {taskData.date || 'Selecione uma data'}
          </CustomText>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={taskData.date ? new Date(taskData.date) : new Date()}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={handleDateChange}
          />
        )}

        <TextInput
          style={styles.input}
          placeholder="Responsável"
          value={taskData.responsible}
          onChangeText={(text) => handleInputChange('responsible', text)}
        />

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={taskData.priority}
            onValueChange={(value) => handleInputChange('priority', value)}
          >
            <Picker.Item label="Prioridade" value="" />
            <Picker.Item label="Baixa" value="baixa" />
            <Picker.Item label="Média" value="media" />
            <Picker.Item label="Alta" value="alta" />
          </Picker>
        </View>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={taskData.status}
            onValueChange={(value) => handleInputChange('status', value)}
          >
            <Picker.Item label="Status" value="" />
            <Picker.Item label="Para fazer" value="para fazer" />
            <Picker.Item label="Em progresso" value="em progresso" />
            <Picker.Item label="Concluído" value="concluído" />
          </Picker>
        </View>

        <TextInput
          style={styles.descriptionInput}
          placeholder="Descrição"
          value={taskData.description}
          multiline
          numberOfLines={4}
          onChangeText={(text) => handleInputChange('description', text)}
        />
      </ScrollView>

      <View style={styles.buttonContainer}>
        <FilledButton
          title="Salvar alterações"
          onPress={handleSave}
        />
        <OutlinedButton
          title="Cancelar"
          onPress={() => navigation.navigate('ViewTask', { task: task })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20
  },
  formContainer: {
    paddingHorizontal: 20,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00AFFF',
    marginBottom: 20,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    width: '100%',
  },
  inputTouchable: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  dateText: {
    fontSize: 16,
    color: '#555',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  descriptionInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    textAlignVertical: 'top',
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    width: '100%',
  },
  buttonContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default EditTaskScreen;
