import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import CustomText from './CustomText';

const FilledButton = ({ title, onPress }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <CustomText style={styles.buttonText}>
          {title}
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00AFFF',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FilledButton;
