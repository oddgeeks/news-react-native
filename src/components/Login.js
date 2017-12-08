import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View, AsyncStorage, TouchableHighlight, Text, StatusBar
} from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import style from './LoginStyles';

import { NavigationActions } from 'react-navigation';

const resetActionMain = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Main' })
  ]
});

export default class Login extends Component {
  static navigationOptions = () => ({
    header: null
  });

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
          this.props.navigation.dispatch(resetActionMain);
          console.log(this.props.navigation);
        })
        .catch((err) => {
          console.log('WRONG SIGNIN', err);
        })
        .done();
    }).done();
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#00838f' }}>
        <StatusBar
          backgroundColor="#005662"
          barStyle="light-content"
        />
        <View style={{ flex: 1 }} >
          <Text style={style.header}>Newsify</Text>
          <Text style={style.text}>View News Headlines from over 200 sources</Text>
          <Text style={[style.text, { marginTop: '1%' }]}>Stay upto date with World events and happenings</Text>
        </View>
        <View style={{
          flex: 1, alignItems: 'center'
        }}
        >
          <View style={{ marginTop: '20%' }}>
            <GoogleSigninButton
              style={{ width: 200, height: 48 }}
              size={GoogleSigninButton.Size.Wide}
              onPress={() => { this.signIn(); }}
              color={GoogleSigninButton.Color.Light}
            />
          </View>
        </View>
      </View>
    );
  }
}
