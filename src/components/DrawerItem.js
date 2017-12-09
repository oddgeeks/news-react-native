import React from 'react';
import { Text, View, TouchableNativeFeedback } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';
import styles from './styles/DrawerItemStyle';

const DrawerItem = (props) => {
  const backgroundColor = props.selected ? '#F5F5F5' : 'white';
  const iconColor = props.selected ? '#ff6f00' : 'black';
  const textColor = props.selected ? '#ff6f00' : undefined;

  return (
    <TouchableNativeFeedback
      onPress={props.onPress}
      background={TouchableNativeFeedback.SelectableBackground()}
    >
      <View style={[styles.mainView, { backgroundColor }]}>
        { props.fontAwesome &&
        <FontAwesomeIcon
          name={props.iconName}
          style={[styles.icon, { color: iconColor }]}
        />}
        { !props.fontAwesome &&
        <Icon
          name={props.iconName}
          style={[styles.icon, { color: iconColor }]}
        />}
        <Text style={[styles.text, { color: textColor }]}>
          {props.name}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};
DrawerItem.defaultProps = {
  fontAwesome: false,
  selected: false
};

DrawerItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
  fontAwesome: PropTypes.bool,
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool
};
export default DrawerItem;
