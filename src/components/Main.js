import { DrawerNavigator, StackNavigator, } from 'react-navigation';
import SourcesScreen from './Sources';
import ArticlesScreen from './Articles';
import ArticleWebView from './ArticleWebView';
import CustomDrawer from './Drawer';
import ArticleSearchScreen from './ArticleSearch';

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
  },
  ArticleSearchScreen: {
    screen: ArticleSearchScreen
  }
}, {
  initialRouteName: 'Source',
  initialRouteParams: {
    category: { value: 'technology', name: 'Technology' }
  },
  navigationOptions: {
    header: null
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

