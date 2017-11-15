import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  _signIn() {
    GoogleSignin.signIn()
      .then((user) => {
        console.log(user);
        this.setState({ user });
      })
      .catch((err) => {
        console.log('WRONG SIGNIN', err);
      })
      .done();
  }

  render() {
    return (
      <View style={{ backgroundColor: 'yellow' }}>
        <Text>
          Login
        </Text>
        <GoogleSigninButton style={{ width: 120, height: 44 }} onPress={() => { this._signIn(); }} />
      </View>
    );
  }
}
