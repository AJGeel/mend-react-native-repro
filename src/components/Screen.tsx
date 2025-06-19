import React from 'react';
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Button from './Button';
import {
  authenticateUser,
  fetchDataWithInsecureCookies,
  loginUser,
  regexDenialExport,
  weakPseudoRandomNumberGenerator,
} from '../helpers/badCode';

export const Screen = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { paddingTop: styles.container.padding + insets.top },
      ]}>
      <Text style={styles.title}>Vulnerabilities</Text>
      <Button
        label="Expose backend after logging in"
        onPress={() => loginUser('username@email.com', 'hunter2')}
      />
      <Button
        label="Fetch data with insecure cookies"
        onPress={() => fetchDataWithInsecureCookies()}
      />
      <Button
        label="Fetch data with insecure cookies"
        onPress={() => authenticateUser('*)(|(uid=admin)(uid=root')}
      />
      <Button label="Regex denial export" onPress={() => regexDenialExport()} />
      <Button
        label="Generate weak random number"
        onPress={() => {
          const weak = weakPseudoRandomNumberGenerator();
          Alert.alert(`Weak pseudo-random number: "${weak}"`);
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
  },
  title: { fontSize: 20, fontWeight: 'bold' },
});
