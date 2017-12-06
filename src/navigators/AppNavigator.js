import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import Main from '../components/Main';
import Login from '../components/Login';
import InitialRoute from '../components/InitialRoute';


export const AppNavigator = StackNavigator({
  Main: {
    screen: Main,
  },
  Login: {
    screen: Login,
  },
  InitialRoute: {
    screen: InitialRoute
  }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);


const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
