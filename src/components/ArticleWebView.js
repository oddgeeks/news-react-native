import React, { Component } from 'react';
import { WebView } from 'react-native';
import Header from './Header';

class ArticleWebView extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header title={navigation.state.params.title} />
  });
  render() {
    const { navigation } = this.props;
    return (
      <WebView
        source={{ uri: `${navigation.state.params.articleUrl}` }}
      />
    );
  }
}

export default ArticleWebView;

