import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { ListItem } from 'native-base';
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
  static navigationOptions = ({ navigation }) => ({
    header: <Header routeName="Source" title={navigation.state.params.category.name} />
  });

  componentWillMount() {
    console.log(this.props);
    console.log(this.props.navigation.state.key);
    this.props.getSources(this.props.category.value);
  }

  onSourcePressButton = (name) => {
    this.props.navigation.navigate('Article', { source: name });
  }

  keyExtractor = item => item.id;

  signOut = async () => {
    try {
      await GoogleSignin.signOut();
      this.props.navigation.dispatch(resetActionLogin);
    } catch (err) {
      console.log(err);
    }
  }

  renderItem = ({ item }) => (
    <ListItem onPress={() => this.onSourcePressButton(item.name)}>
      <Text>{item.name}</Text>
    </ListItem>
  );

  render() {
    return (
      <View style={{ backgroundColor: 'white' }}>
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
