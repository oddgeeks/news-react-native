import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { ListItem, Thumbnail, Body, Text } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getArticles } from '../actions/articles';
import { resetErrorMessage } from '../actions/ajaxCallStatus';
import Header from './Header';
import Loader from './Loader';

class ArticleScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header title={navigation.state.params.source} />
  });

  componentWillMount() {
    this.props.getArticles(this.props.navigation.state.params.source);
  }

  componentWillUnmount() {
    this.props.resetErrorMessage();
  }

  onArticlePressButton = (url, title) => {
    this.props.navigation.navigate('ArticleWebView', { articleUrl: url, title });
  }

  keyExtractor = item => item.url;

   renderItem = ({ item }) => (
     <ListItem onPress={() => this.onArticlePressButton(item.url, item.title)}>
       <Thumbnail
         square
         style={{ width: 90, height: 90, }}
         source={{ uri: item.urlToImage }}
       />
       <Body style={{ marginLeft: 5 }}>
         <Text style={{ color: 'black' }}>
           {item.title}
         </Text>
         <Text note>{item.description}
         </Text>
       </Body>
     </ListItem>
   );

   render() {
     if (this.props.isLoading) {
       return <Loader />;
     }
     return (
       <View style={{ backgroundColor: 'white', flex: 1 }}>
         { this.props.errorMessage ?
           <Text>{this.props.errorMessage}</Text>
         :
           <FlatList
             data={this.props.articles}
             renderItem={this.renderItem}
             keyExtractor={this.keyExtractor}
           />
         }
       </View>
     );
   }
}


const mapDispatchToProps = dispatch => bindActionCreators({
  getArticles,
  resetErrorMessage
}, dispatch);

const mapStateToProps = state => ({
  articles: state.articleReducer.articles,
  errorMessage: state.ajaxCallStatus.message,
  isLoading: state.ajaxCallStatus.loading
});

ArticleScreen.propTypes = {
  getArticles: PropTypes.func.isRequired,
  articles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    state: PropTypes.shape({
      params: PropTypes.shape({
        source: PropTypes.string
      })
    }).isRequired
  }).isRequired

};
export default connect(mapStateToProps, mapDispatchToProps)(ArticleScreen);

