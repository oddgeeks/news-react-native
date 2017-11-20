import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, AsyncStorage
} from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.signIn = this.signIn.bind(this);
  }
  async signIn() {
    await GoogleSignin.configure({}).then(() => {
      GoogleSignin.signIn()
        .then((user) => {
          console.log(user);
          this.setState({ user });
          this.props.navigation.navigate('Main');
        })
        .catch((err) => {
          console.log('WRONG SIGNIN', err);
        })
        .done();
    }).done();
  }

  render() {
    return (
      <View style={{ backgroundColor: 'yellow' }}>
        <Text>
          Login
        </Text>
        <GoogleSigninButton style={{ width: 120, height: 44 }} onPress={() => { this.signIn(); }} />
      </View>
    );
  }
}
