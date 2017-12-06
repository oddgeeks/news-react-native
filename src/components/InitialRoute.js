import React, { Component } from 'react';
import { GoogleSignin } from 'react-native-google-signin';
import { Text } from 'react-native';
import { NavigationActions } from 'react-navigation';

const resetActionLogin = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Login' })
  ]
});
const resetActionMain = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Main' })
  ]
});

export default class InitialRoute extends Component {
  async componentWillMount() {
    try {
      await GoogleSignin.configure({});
      const user = await GoogleSignin.currentUserAsync();
      if (user) {
        this.props.navigation.dispatch(resetActionMain);
      } else {
        this.props.navigation.dispatch(resetActionLogin);
      }
    } catch (err) {
      this.props.navigation.dispatch(resetActionLogin);
    }
  }
  render() {
    return (
      <Text>loading</Text>
    );
  }
}

