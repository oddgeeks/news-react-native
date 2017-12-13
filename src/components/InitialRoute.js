import React, { Component } from 'react';
import { GoogleSignin } from 'react-native-google-signin';
import { Text, View, StatusBar } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles/InitialRouteStyle';
import setCurrentUser from './../actions/auth';
import Loader from './Loader';

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
  ],
  key: null
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
        <Loader color="white" marginTop="5%" />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setCurrentUser
}, dispatch);

InitialRoute.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    dispatch: PropTypes.func.isRequired
  }).isRequired
};


export default connect(undefined, mapDispatchToProps)(InitialRoute);
