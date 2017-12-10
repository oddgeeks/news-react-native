import React, { Component } from 'react';
import { Text, StatusBar, View } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import { NavigationActions } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles/LoginStyles';
import setCurrentUser from './../actions/auth';

const resetActionMain = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Main' })
  ],
  key: null
});

class Login extends Component {
  static navigationOptions = () => ({
    header: null
  });
  signIn = async () => {
    await GoogleSignin.configure({}).then(() => {
      GoogleSignin.signIn()
        .then((user) => {
          this.props.setCurrentUser(user);
          this.props.navigation.dispatch(resetActionMain);
        })
        .catch((err) => {
          console.log('WRONG SIGNIN', err);
        })
        .done();
    }).done();
  }

  render() {
    return (
      <View style={styles.mainView}>
        <StatusBar
          backgroundColor="#005662"
          barStyle="light-content"
        />
        <View style={{ flex: 1 }} >
          <Text style={styles.header}>Newsify</Text>
          <Text style={styles.text}>View News Headlines from over 200 sources</Text>
          <Text style={[styles.text, { marginTop: '1%' }]}>Stay upto date with World events and happenings</Text>
        </View>
        <View style={styles.signInView}>
          <GoogleSigninButton
            style={{ width: 200, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            onPress={() => { this.signIn(); }}
            color={GoogleSigninButton.Color.Light}
          />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setCurrentUser
}, dispatch);

Login.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func.isRequired
  }).isRequired,
  setCurrentUser: PropTypes.func.isRequired
};


export default connect(undefined, mapDispatchToProps)(Login);
