import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { Container, Header, Left, Body, Right,
  Button, Icon, Thumbnail, ListItem, Input, Text
} from 'native-base';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import { searchArticles, resetSearchArticles } from '../actions/searchArticles';
import Loader from './Loader';

class ArticleSearchScreen extends Component {
  static navigationOptions = () => ({
    header: null
  });
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }
  componentWillUnmount() {
    this.props.resetSearchArticles();
  }

  onArticlePressButton = (url, title) => {
    this.props.navigation.navigate('ArticleWebView', { articleUrl: url, title });
  }

  onChangeText = (text) => {
    this.setState({ query: text });
  }

  onSubmit = () => {
    this.props.searchArticles(this.state.query);
  }
  clearInput = () => {
    if (this.state.query) {
      this.setState({ query: '' });
      this.textInput.setNativeProps({ text: '' });
    } else {
      this.props.goBack();
    }
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
     let value;
     if (this.props.errorMessage) {
       value = <Text>{this.props.errorMessage}</Text>;
     } else {
       value = (<FlatList
         data={this.props.articles}
         renderItem={this.renderItem}
         keyExtractor={this.keyExtractor}
       />);
     }
     return (
       <Container>
         <Header
           androidStatusBarColor="#BDBDBD"
           style={{
            backgroundColor: '#FFFFFF'
        }}
         >
           <Left>
             <Button onPress={this.props.goBack} transparent>
               <Icon name="arrow-back" style={{ color: '#757575' }} />
             </Button>
           </Left>
           <Input
             autoFocus
              ref={component => this.textInput = component}  // eslint-disable-line
             style={{
             left: 20,
              flex: 4,
              top: 1
          }}
             placeholder="Search"
             onChangeText={this.onChangeText}
             onSubmitEditing={this.onSubmit}
           />
           <Right>
             <Button transparent onPress={this.clearInput} >
               <Icon name="close" style={{ color: '#757575' }} />
             </Button>
           </Right>
         </Header>
         <View style={{ backgroundColor: 'white', flex: 1 }}>
           {
            this.props.isLoading ? <Loader /> : value
           }
         </View>
       </Container>
     );
   }
}


const mapDispatchToProps = dispatch => bindActionCreators({
  searchArticles,
  goBack: () => NavigationActions.back(),
  resetSearchArticles
}, dispatch);

const mapStateToProps = state => ({
  articles: state.searchArticleReducer.articles,
  errorMessage: state.searchArticleReducer.errorMessage,
  isLoading: state.searchArticleReducer.isLoading
});

ArticleSearchScreen.propTypes = {
  resetSearchArticles: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  searchArticles: PropTypes.func.isRequired,
  articles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired

};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleSearchScreen);

