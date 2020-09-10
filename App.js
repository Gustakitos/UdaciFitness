/* eslint-disable no-use-before-define */
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import AddEntry from './components/AddEntry';

export default function App() {
  return (
    <View style={styles.container}>
      <AddEntry />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
