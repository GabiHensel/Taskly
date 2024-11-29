import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import CustomText from './CustomText';

const OutlinedButton = ({ title, onPress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <CustomText style={styles.text}>{title}</CustomText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: '#00AFFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: '#00AFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OutlinedButton;
