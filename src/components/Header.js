import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

const AppHeader = ({
  openDrawer, goBack, title, routeName
}) => (
  <Header androidStatusBarColor="#005662" style={{ backgroundColor: '#00838f' }}>
    <Left>
      {
        routeName === 'Source' ?
          (
            <Button onPress={openDrawer} transparent>
              <Icon name="menu" />
            </Button>
          ) : (
            <Button transparent onPress={goBack}>
              <Icon name="arrow-back" />
            </Button>
          )
      }
    </Left>
    <Body>
      <Title>{title}</Title>
    </Body>
    <Right>
      <Button transparent onPress={() => console.log('coming soon')}>
        <Icon name="search" />
      </Button>
    </Right>
  </Header>
);

const mapDispatchToProps = dispatch => bindActionCreators({
  openDrawer: () => NavigationActions.navigate({ routeName: 'DrawerOpen' }),
  goBack: () => NavigationActions.back()
}, dispatch);

const mapStateToProps = state => ({
  category: state.categoryReducer.currentCategory,
  sources: state.sourceReducer.sources,
});

AppHeader.defaultProps = {
  routeName: undefined
};

AppHeader.propTypes = {
  openDrawer: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  routeName: PropTypes.string
};
export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);

