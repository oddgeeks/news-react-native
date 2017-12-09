import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { GoogleSignin } from 'react-native-google-signin';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Icon } from 'native-base';
import changeCurrrentCategory from './../actions/categories';
import DrawerItem from './DrawerItem';
import styles from './DrawerStyles';


class CustomDrawer extends Component {
  onItemPress = (category) => {
    const resetActionArticle = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Source', params: { category } }),
      ],
    });
    this.props.navigation.dispatch(resetActionArticle);
    this.props.changeCurrrentCategory(category);
  }
  signOut = async () => {
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

  keyExtractor = item => item.value;

  renderItem = ({ item }) => (
    <DrawerItem onPress={() => this.onItemPress(item)} name={item.name} iconName="paper" />
  );
  render() {
    return (
      <View >
        <ScrollView>
          <View style={styles.mainView} >
            <Icon
              name="person"
              style={styles.personIcon}
            />
            <Text
              style={styles.personName}
            >
              Oluwagbenga Joloko
            </Text>
          </View>
          <Text
            style={styles.category}
          >CATEGORY
          </Text>
          <FlatList
            data={this.props.categories}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
          />
          <View
            style={styles.line}
          />
          <DrawerItem
            name="Sign Out"
            iconName="sign-out"
            onPress={() => { this.signOut(); }}
            fontAwesome
          />
        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changeCurrrentCategory
}, dispatch);

const mapStateToProps = state => ({
  user: state.authReducer.user,
  categories: state.categoryReducer.categories
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
