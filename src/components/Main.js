import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'blue' }}>
        <Text style={{ color: 'white' }}>
          Main
        </Text>
      </View>
    );
  }
}
