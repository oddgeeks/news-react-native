import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigator';

// let initialNavState = AppNavigator.router.getStateForAction(NavigationActions.init());
const firstAction = AppNavigator.router.getActionForPathAndParams('InitialRoute');
const initialNavState = AppNavigator.router.getStateForAction(firstAction);

const navReducer = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Logout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
};

export default navReducer;
