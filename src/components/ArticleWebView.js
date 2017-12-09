import React, { Component } from 'react';
import { WebView } from 'react-native';


const ArticleWebView = ({ navigation }) => (<WebView
  source={{ uri: `${navigation.state.params.articleUrl}` }}
  style={{ marginTop: 1 }}
/>);

export default ArticleWebView;

