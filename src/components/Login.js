import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, AsyncStorage
} from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

GoogleSignin.configure({}).then(() => {
  GoogleSignin.currentUserAsync().then((user) => {
    console.log('USER', user);
  }).done();
});

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.signIn = this.signIn.bind(this);
  }
  async signIn() {
    console.log(this.state)
    try {
      await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
      const value = await AsyncStorage.getAllKeys();
      console.log('inside try')
      console.log(value);
    } catch (error) {
      console.log(error)
      // Error saving data
    }
    //     try {
    //   const value = await AsyncStorage.getAllKeys();
    //   if (value !== null){
    //     // We have data!!
    //     console.log(value);
    //   }
    // } catch (error) {
    //   // Error retrieving data
    // }
    // GoogleSignin.signIn()
    //   .then((user) => {
    //     console.log(user);
    //     this.setState({ user });
    //   })
    //   .catch((err) => {
    //     console.log('WRONG SIGNIN', err);
    //   })
    //   .done();
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
