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
import { getSources } from '../actions/sources';


const ArticleScreen = () => (
  <Text>Article screen</Text>
);

/* class ArticleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.signOut = this.signOut.bind(this);
  }
  componentWillMount() {
    console.log(this.props.navigation);
    console.log(this.props.navigation.state.key);
    this.props.getSources(this.props.navigation.state.key);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.navigation.state.key !== nextProps.navigation.state.key) {
      console.log(this.props.navigation);
      console.log(nextProps.navigation.state.key);
      this.props.getSources(nextProps.navigation.state.key);
    }
  }


  onSourcePressButton = (name) => {
    this.props.navigation.navigate('technology');
  }

  keyExtractor = item => item.id;

  async signOut() {
    try {
      await GoogleSignin.signOut();
      console.log(this.state);
      this.props.navigation.navigate('Login');
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
          {this.props.navigation.state.routeName}
        </Text>

        <FlatList
          data={this.props.sources}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />

        <Button
          onPress={() => { this.signOut(); }}
          title="Sign Out"
        />
      </View>
    );
  }
}


const mapDispatchToProps = dispatch => bindActionCreators({
  getSources
}, dispatch);

const mapStateToProps = state => ({
  sources: state.sourceReducer.sources
});

export default
 connect(mapStateToProps, mapDispatchToProps)(SourcesScreen); */

export default ArticleScreen;
