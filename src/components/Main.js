import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import { Text } from 'react-native';
import SourcesScreen from './Sources';
import ArticlesScreen from './Articles';

const CategoryScreen = StackNavigator({
  Source: {
    screen: SourcesScreen,
  },
  Article: {
    screen: ArticlesScreen,
    path: 'articles/:source'
  }
}, {
  initialRouteName: 'Source'
});

const categoryRoutes = {
  business: {
    screen: CategoryScreen,
  },
  entertainment: {
    screen: CategoryScreen
  },
  general: {
    screen: CategoryScreen
  },
  'health-and-medical': {
    screen: CategoryScreen
  },
  music: {
    screen: CategoryScreen
  },
  politics: {
    screen: CategoryScreen
  },
  'science-and-nature': {
    screen: CategoryScreen
  },
  sport: {
    screen: CategoryScreen
  },
  technology: {
    screen: CategoryScreen
  }
};


const Main = DrawerNavigator(
  {
    ...categoryRoutes
  },
  {
    initialRouteName: 'technology',
    contentOptions: {
      activeTintColor: '#e91e63',
    }
  }
);

export default Main;

