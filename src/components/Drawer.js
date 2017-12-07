import React, { Component } from 'react';
import { DrawerItems, NavigationActions } from 'react-navigation';
import { Text, View, ScrollView, Button, FlatList } from 'react-native';
import { GoogleSignin } from 'react-native-google-signin';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import changeCurrrentCategory from './../actions/categories';


class CustomDrawer extends Component {
  onItemPress = (name) => {
    const resetActionArticle = NavigationActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate({ routeName: 'Main' }),
      ],
    });
    this.props.navigation.dispatch(resetActionArticle);
    this.props.changeCurrrentCategory(name);

  }
  signOut= async () => {
    // const resetActionArticle = NavigationActions.reset({
    //   index: 0,
    //   key: null,
    //   actions: [
    //     NavigationActions.navigate({ routeName: 'Main' }),
    //   ],
    // });
    // this.props.navigation.dispatch(resetActionArticle);
    this.props.navigation.navigate('technology');
    // const resetActionLogin = NavigationActions.reset({
    //   index: 0,
    //   actions: [
    //     NavigationActions.navigate({ routeName: 'Login' })
    //   ],
    //   key: null,
    // });
    // try {
    //   await GoogleSignin.signOut();
    //   this.props.navigation.dispatch(resetActionLogin);
    // } catch (err) {
    //   console.log(err);
    // }
  }


  keyExtractor = item => item.id;

    renderItem = ({ item }) => (
      <Text onPress={() => this.onItemPress(item)}>{item}</Text>
    );

    render() {
      console.log(this.props);
      return (
        <View >
          <ScrollView>
            <Text>categories</Text>
            <FlatList
              data={this.props.categories}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
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

const mapDispatchToProps = dispatch => bindActionCreators({
  changeCurrrentCategory
}, dispatch);

const mapStateToProps = state => ({
  category: state.categoryReducer.currentCategory,
  categories: state.categoryReducer.categories
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
