import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/Store';
import { Header } from './src/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const { container } = styles;

export default class App extends React.Component {
  render() {
    return (
      <Provider>
        <View style={styles.container}>
          <Header />
        </View>
      </Provider>
    );
  }
}
