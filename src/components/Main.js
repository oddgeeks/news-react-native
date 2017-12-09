import React from 'react';
import { DrawerNavigator, StackNavigator, DrawerItems } from 'react-navigation';
import { Text, View, ScrollView } from 'react-native';
import SourcesScreen from './Sources';
import ArticlesScreen from './Articles';
import ArticleWebView from './ArticleWebView';
import CustomDrawer from './Drawer';
import Header from './Header';

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
  initialRouteName: 'Source',
  navigationOptions: {
    header: <Header />
  }

});

// const categoryRoutes = {
//   CategoryScreen: {
//     screen: CategoryScreen,
//   },
//   entertainment: {
//     screen: CategoryScreen
//   },
//   general: {
//     screen: CategoryScreen
//   },
//   'health-and-medical': {
//     screen: CategoryScreen
//   },
//   music: {
//     screen: CategoryScreen
//   },
//   politics: {
//     screen: CategoryScreen
//   },
//   'science-and-nature': {
//     screen: CategoryScreen
//   },
//   sport: {
//     screen: CategoryScreen
//   },
//   technology: {
//     screen: CategoryScreen
//   },
// };


const Main = DrawerNavigator(
  {
    CategoryScreen: {
      screen: CategoryScreen,
    }
  },
  {
    contentComponent: CustomDrawer
  }
);

export default Main;

