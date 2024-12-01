import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/LoginScreen';
import TasksScreen from './src/TasksScreen';
import CreateTaskScreen from './src/CreateTaskScreen';
import ViewTaskScreen from './src/ViewTaskScreen';
import EditTaskScreen from './src/EditTaskScreen';

const Stack = createStackNavigator();

export default function App() {
     return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Tasks"
              component={TasksScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateTask"
              component={CreateTaskScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ViewTask"
              component={ViewTaskScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EditTask" // Verifique se o nome corresponde
                component={EditTaskScreen} // Certifique-se de que está passando o componente correto
                options={{ headerShown: false }}
              />
          </Stack.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
