import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { BackHandler } from 'react-native';
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

class AppWithNavigationState extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.shape({}).isRequired,
    goBack: PropTypes.func.isRequired,
    closeDrawer: PropTypes.func.isRequired
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    if (this.isDrawerOpen(this.props.nav)) {
      this.props.closeDrawer();
      return true;
    }
    if (this.shouldCloseApp(this.props.nav)) {
      return false;
    }
    this.props.goBack();
    return true;
  };
  isDrawerOpen = nav => nav.routes[0].index === 1

  shouldCloseApp = (nav) => {
    if (nav.index > 0) return false;

    if (nav.routes) {
      return nav.routes.every(this.shouldCloseApp);
    }

    return true;
  }
  render() {
    const { dispatch, nav } = this.props;
    return <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />;
  }
}


const mapStateToProps = state => ({
  nav: state.nav,
});

const mapDispatchToProps = dispatch =>
  ({
    dispatch,
    ...bindActionCreators({
      closeDrawer: () => NavigationActions.navigate({ routeName: 'DrawerClose' }),
      goBack: () => NavigationActions.back(),
    }, dispatch)
  });

export default connect(mapStateToProps, mapDispatchToProps)(AppWithNavigationState);
