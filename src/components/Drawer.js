import React, { Component } from 'react';
import { DrawerItems, NavigationActions } from 'react-navigation';
import { Text, View, ScrollView, Button } from 'react-native';
import { GoogleSignin } from 'react-native-google-signin';


export default class CustomDrawer extends Component {
  signOut= async () => {
    const resetActionLogin = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Login' })
      ],
      key: null,
    });
    try {
      await GoogleSignin.signOut();
      this.props.navigation.dispatch(resetActionLogin);
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <View >
        <ScrollView>
          <Text>categories</Text>
          <DrawerItems
            {...this.props}
          />
        </ScrollView>
        <Button
          onPress={() => { this.signOut(); }}
          title="Sign Out"
        />
      </View>
    );
  }
}
