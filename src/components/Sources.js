import React, { Component } from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { ListItem, Text } from 'native-base';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { GoogleSignin } from 'react-native-google-signin';
import PropTypes from 'prop-types';
import { getSources } from '../actions/sources';
import Header from './Header';
import Loader from './Loader';

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
      <Text style={{ color: 'black' }}>{item.name}</Text>
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
            data={this.props.sources}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
          />
         }
      </View>
    );
  }
}


const mapDispatchToProps = dispatch => bindActionCreators({
  getSources
}, dispatch);

const mapStateToProps = state => ({
  category: state.categoryReducer.currentCategory,
  sources: state.sourceReducer.sources,
  errorMessage: state.sourceReducer.errorMessage,
  isLoading: state.sourceReducer.isLoading
});

SourcesScreen.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired,
  sources: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  getSources: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
  }).isRequired,
  errorMessage: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SourcesScreen);
