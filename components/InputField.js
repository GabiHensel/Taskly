import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const InputField = ({ placeholder, secureTextEntry }) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    fontSize: 16,
  },
});

export default InputField;
