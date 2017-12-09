import React from 'react';
import { DrawerNavigator, StackNavigator, } from 'react-navigation';
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
  initialRouteParams: {
    category: { value: 'technology', name: 'Technology' }
  },
  navigationOptions: {
    header: <Header />
  }
});

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

