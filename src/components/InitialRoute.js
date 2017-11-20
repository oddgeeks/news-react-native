import React, { Component } from 'react';
import { GoogleSignin } from 'react-native-google-signin';
import Main from './Main';
import Login from './Login';


export default class InitialRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      loggedIn: false
    };
  }
  async componentWillMount() {
    try {
      await GoogleSignin.configure({});
      const user = await GoogleSignin.currentUserAsync();
      if (user) {
        this.setState({ loggedIn: true });
        this.setState({ loading: false });
      } else {
        this.setState({ loading: false });
      }
    } catch (err) {
      this.setState({ loading: false });
    }
  }
  render() {
    if (this.state.loading) {
      return null;
    }
    return (
      this.state.loggedIn ? <Main navigation={this.props.navigation} /> : <Login navigation={this.props.navigation} />
    );
  }
}

