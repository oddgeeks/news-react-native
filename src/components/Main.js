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
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import { GoogleSignin } from 'react-native-google-signin';
import { getSources } from '../actions/sources';



const mapDispatchToProps = dispatch => bindActionCreators({
  getSources
}, dispatch);

const mapStateToprops = state => ({
  sources: state.sourceReducer.sources
})

@connect(mapStateToprops, mapDispatchToProps)
class CategoryScreen extends Component {
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
    
    if(this.props.navigation.state.key!== nextProps.navigation.state.key) {
      console.log(this.props.navigation);
      console.log(nextProps.navigation.state.key)
      this.props.getSources(nextProps.navigation.state.key);
    }
  }
  async signOut() {
    try {
      await GoogleSignin.signOut();
      console.log(this.state);
      this.props.navigation.navigate('Login');
    } catch (err) {
      console.log(err);
    }
  }

  _keyExtractor = (item, index) => item.id;


  _onSourcePressButton = (name) => {
     this.props.navigation.navigate('technology');
  }

  _renderItem = ({item}) => (
    <TouchableHighlight onPress={()=>this._onSourcePressButton(item.name)}>
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
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
        />
        
        <Button
          onPress={() => { this.signOut(); }}
          title="Sign Out"
        />
      </View>
    );
  }
}





const categoryRoutes = {
 "business": {
   screen: CategoryScreen,
 },
 entertainment: {
   screen: CategoryScreen
 },
 general: {
   screen: CategoryScreen
 },
 "health-and-medical": {
   screen: CategoryScreen
 },
 music: {
   screen: CategoryScreen
 },
 politics: {
   screen: CategoryScreen
 },
 "science-and-nature": {
   screen: CategoryScreen,
   name: 'science-and-nature'
 },
 sport: {
  screen: CategoryScreen
 },
 technology: {
   screen: CategoryScreen
 }
}






const Main = DrawerNavigator(
  {
  ...categoryRoutes
  },
  {
    initialRouteName: 'technology',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  }
);

export default Main


