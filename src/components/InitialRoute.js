
import React, { Component } from 'react';
import { GoogleSignin } from 'react-native-google-signin';
import { Text, View, StatusBar } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Spinner } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './InitialRouteStyle';
import setCurrentUser from './../actions/auth';

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

class InitialRoute extends Component {
  static navigationOptions = () => ({
    header: null
  });
  async componentWillMount() {
    try {
      await GoogleSignin.configure({});
      const user = await GoogleSignin.currentUserAsync();
      if (user) {
        this.props.setCurrentUser(user);
        setTimeout(() => {
          this.props.navigation.dispatch(resetActionMain);
        }, 0);
      } else {
        setTimeout(() => {
          this.props.navigation.dispatch(resetActionLogin);
        }, 0);
      }
    } catch (err) {
      setTimeout(() => {
        this.props.navigation.dispatch(resetActionLogin);
      }, 0);
    }
  }
  render() {
    return (
      <View style={styles.background}>
        <StatusBar
          backgroundColor="#005662"
          barStyle="light-content"
        />
        <Text style={styles.text}>Newsify</Text>
        <View style={styles.spinner}>
          <Spinner color="white" />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setCurrentUser
}, dispatch);


export default connect(undefined, mapDispatchToProps)(InitialRoute);
