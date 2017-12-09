import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { GoogleSignin } from 'react-native-google-signin';
import configureStore from './store/configureStore';
import AppWithNavigationState from './navigators/AppNavigator';

const store = configureStore();

export default class App extends Component {
  componentWillMount() {
    GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => {
      GoogleSignin.configure({}).then(() => {
      }).done();
    })
      .catch((err) => {
        console.log('Play services error', err.code, err.message);
      });
  }
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
