import React from 'react';
import { View } from 'react-native';
import { Spinner } from 'native-base';
import PropTypes from 'prop-types';

const Loader = ({ color, marginTop }) => (
  <View style={{ marginTop }}>
    <Spinner color={color} />
  </View>
);

Loader.defaultProps = {
  color: '#c43e00',
  marginTop: '50%'
};
Loader.propTypes = {
  color: PropTypes.string,
  marginTop: PropTypes.string
};
export default Loader;
