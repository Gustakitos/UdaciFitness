/* eslint-disable no-use-before-define */
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import AddEntry from './components/AddEntry';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/reducers';

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
    <View style={styles.container}>
      <AddEntry />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginLeft: 10,
    // marginRight: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
