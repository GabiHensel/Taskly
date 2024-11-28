import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CustomText = (props) => {
  return (
    <View style={props.style}>
      <Text style={[styles.text, props.style]}>
        {props.children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Kanit_400Regular',
  },
});

export default CustomText;
