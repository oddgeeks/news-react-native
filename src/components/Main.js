import React from 'react';
import { DrawerNavigator, StackNavigator, DrawerItems } from 'react-navigation';
import { Text, View, ScrollView } from 'react-native';
import SourcesScreen from './Sources';
import ArticlesScreen from './Articles';
import ArticleWebView from './ArticleWebView';
import CustomDrawer from './Drawer';

const CategoryScreen = StackNavigator({
  Source: {
    screen: SourcesScreen,
  },
  Article: {
    screen: ArticlesScreen,
    path: 'articles/:source'
  },
  ArticleWebView: {
    screen: ArticleWebView,
    path: 'articles/:articleUrl'
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
  },
};


const Main = DrawerNavigator(
  {
    ...categoryRoutes
  },
  {
    initialRouteName: 'technology',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
    contentComponent: CustomDrawer
  }
);

export default Main;

