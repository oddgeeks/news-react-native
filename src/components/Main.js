import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import { GoogleSignin } from 'react-native-google-signin';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.signOut = this.signOut.bind(this);
  }

  async signOut() {
    try {
      await GoogleSignin.signOut();
      console.log(this.state);
      this.props.navigation.navigate('Login');
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View style={{ backgroundColor: 'blue' }}>
        <Text style={{ color: 'white' }}>
          Main
        </Text>
        <Button
          onPress={() => { this.signOut(); }}
          title="Sign Out"
        />
      </View>
    );
  }
}
