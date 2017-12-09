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
import { NavigationActions } from 'react-navigation';
import { GoogleSignin } from 'react-native-google-signin';
import { getSources } from '../actions/sources';
import Header from './Header';

const resetActionLogin = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Login' })
  ],
  key: null
});


class SourcesScreen extends Component {
  static navigationOptions = () => ({
    header: <Header routeName="Source" />
  });
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.signOut = this.signOut.bind(this);
  }
  componentWillMount() {
    console.log(this.props);
    console.log(this.props.navigation.state.key);
    this.props.getSources(this.props.category.value);
  }
  // componentWillReceiveProps(nextProps) {
  //   if (this.props.screenProps.source !== nextProps.screenProps.source) {
  //     console.log(this.props.navigation);
  //     console.log(nextProps.screenProps.source);
  //     this.props.getSources(nextProps.screenProps.source);
  //   }
  // }


  onSourcePressButton = (name) => {
    console.log(name, 'inside source');
    // const resetActionArticle = NavigationActions.reset({
    //   index: 0,
    //   key: null,
    //   actions: [
    //     NavigationActions.navigate({ routeName: 'Main' }),
    //   ],
    // });
    // this.props.navigation.dispatch(resetActionArticle);
    // this.props.navigation.navigate(this.props.category);
    this.props.navigation.navigate('Article', { source: name });
  }

  keyExtractor = item => item.id;

  async signOut() {
    try {
      await GoogleSignin.signOut();
      this.props.navigation.dispatch(resetActionLogin);
    } catch (err) {
      console.log(err);
    }
  }

  renderItem = ({ item }) => (
    <TouchableHighlight onPress={() => this.onSourcePressButton(item.name)}>
      <Text>{item.name}</Text>
    </TouchableHighlight>
  );

  render() {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <Text style={{ color: 'blue' }}>
          {this.props.category.name}
        </Text>
        <FlatList
          data={this.props.sources}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}


const mapDispatchToProps = dispatch => bindActionCreators({
  getSources
}, dispatch);

const mapStateToProps = state => ({
  category: state.categoryReducer.currentCategory,
  sources: state.sourceReducer.sources
});

export default connect(mapStateToProps, mapDispatchToProps)(SourcesScreen);
