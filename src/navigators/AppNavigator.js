import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import PropTypes from 'prop-types';

import Main from '../components/Main';
import Login from '../components/Login';
import InitialRoute from '../components/InitialRoute';

export const AppNavigator = StackNavigator(
  {
    Main: {
      screen: Main,
    },
    Login: {
      screen: Login,
    },
    InitialRoute: {
      screen: InitialRoute
    }
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);


const mapStateToProps = state => ({
  nav: state.nav,
});
AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  /* eslint-disable react/forbid-prop-types */
  nav: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(AppWithNavigationState);
