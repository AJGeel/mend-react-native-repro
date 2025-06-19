import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

type Props = {
  label: string;
  onPress: VoidFunction;
};

const Button = ({ label, onPress }: Props) => (
  <Pressable onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>{label}</Text>
  </Pressable>
);

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'gainsboro',
    padding: 20,
    borderRadius: 40,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
  },
});
