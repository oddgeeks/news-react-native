import React from 'react';
import { Text, View, TouchableNativeFeedback } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';
import styles from './DrawerItemStyle';

const DrawerItem = props =>
  (
    <TouchableNativeFeedback
      onPress={props.onPress}
      background={TouchableNativeFeedback.SelectableBackground()}
    >
      <View style={styles.mainView}>
        { props.fontAwesome &&
        <FontAwesomeIcon
          name={props.iconName}
          style={styles.icon}
        />}
        { !props.fontAwesome &&
        <Icon
          name={props.iconName}
          style={styles.icon}
        />}
        <Text style={styles.text}>
          {props.name}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
DrawerItem.defaultProps = {
  fontAwesome: false
};

DrawerItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
  fontAwesome: PropTypes.bool,
  name: PropTypes.string.isRequired
};
export default DrawerItem;
