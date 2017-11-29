import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { GoogleSignin } from 'react-native-google-signin';
import configureStore from './store/configureStore';
import Main from './components/Main';
import Login from './components/Login';
import InitialRoute from './components/InitialRoute';


const store = configureStore();

const AppNavigator = StackNavigator(
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
    initialRouteName: 'Main'
  }
);
export default class App extends Component {
  componentWillMount() {
    GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => {
      GoogleSignin.configure({}).then(() => {
      }).done();
    })
      .catch((err) => {
        console.log('Play services error', err.code, err.message);
      });
  }
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
