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


class SourcesScreen extends Component {
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
    this.props.getSources(this.props.screenProps.source);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.screenProps.source !== nextProps.screenProps.source) {
      console.log(this.props.navigation);
      console.log(nextProps.screenProps.source);
      this.props.getSources(nextProps.screenProps.source);
    }
  }


  onSourcePressButton = (name) => {
    console.log(name, 'inside source');
    this.props.navigation.navigate('Article', { source: name });
  }

  keyExtractor = item => item.id;

  async signOut() {
    try {
      await GoogleSignin.signOut();
      console.log(this.state);
      console.log(this.props);
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
          {this.props.screenProps.source}
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

export default connect(mapStateToProps, mapDispatchToProps)(SourcesScreen);
