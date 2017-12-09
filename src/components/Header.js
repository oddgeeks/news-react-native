import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { NavigationActions } from 'react-navigation';

class AppHeader extends Component {
  constructor(props) {
    super(props);
  }
  test = () => {

  }
  render() {
    return (
      <Header androidStatusBarColor="#005662" style={{ backgroundColor: '#00838f' }}>
        <Left>
          {this.props.routeName === 'Source' ?
          (
            <Button onPress={this.props.openDrawer} transparent>
              <Icon name="menu" />
            </Button>
          ) : (
            <Button transparent onPress={this.props.goBack}>
              <Icon name="arrow-back" />
            </Button>)
          }
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right>
          <Button transparent onPress={this.props.goBack}>
            <Icon name="search" />
          </Button>
        </Right>
      </Header>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  openDrawer: () => NavigationActions.navigate({ routeName: 'DrawerOpen' }),
  goBack: () => NavigationActions.back()
}, dispatch);

const mapStateToProps = state => ({
  category: state.categoryReducer.currentCategory,
  sources: state.sourceReducer.sources,
});

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);

