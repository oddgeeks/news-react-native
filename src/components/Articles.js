import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  FlatList,
  TouchableHighlight
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GoogleSignin } from 'react-native-google-signin';
import { getArticles } from '../actions/articles';


// const ArticleScreen = () => (
//   <Text>Article screen</Text>
// );
class ArticleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    // this.signOut = this.signOut.bind(this);
  }
  componentWillMount() {
    console.log(this.props.navigation);
    this.props.getArticles(this.props.navigation.state.params.source);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.navigation.state.key !== nextProps.navigation.state.key) {
      console.log(this.props.navigation);
      console.log(nextProps.navigation.state.key);
      this.props.getSources(nextProps.navigation.state.key);
    }
  }


  onArticlePressButton = (url) => {
    this.props.navigation.navigate('ArticleWebView', { articleUrl: url });
  }

  keyExtractor = item => item.url;

  // async signOut() {
  //   try {
  //     await GoogleSignin.signOut();
  //     console.log(this.state);
  //     this.props.navigation.navigate('Login');
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

   renderItem = ({ item }) => (
     <TouchableHighlight onPress={() => this.onArticlePressButton(item.url)}>
       <Text>{item.title}</Text>
     </TouchableHighlight>
   );

   render() {
     return (
       <View style={{ backgroundColor: 'white' }}>
         <Text style={{ color: 'blue' }}>
           {this.props.navigation.state.params.source}
         </Text>
         <FlatList
           data={this.props.articles}
           renderItem={this.renderItem}
           keyExtractor={this.keyExtractor}
         />

         {/* <Button
          onPress={() => { this.signOut(); }}
          title="Sign Out"
        /> */}
       </View>
     );
   }
}


const mapDispatchToProps = dispatch => bindActionCreators({
  getArticles
}, dispatch);

const mapStateToProps = state => ({
  articles: state.articleReducer.articles
});

export default
connect(mapStateToProps, mapDispatchToProps)(ArticleScreen);

