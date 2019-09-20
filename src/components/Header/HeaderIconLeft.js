import React from 'react';
import {View, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {string, number, func} from 'prop-types';

const HeaderIconLeft = ({iconName, size, color, onPress}) => {
  return (
    <View style={styles.headerIconLeft}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Icon name={iconName} size={size} color={color ? color : '#ffffff'} />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  headerIconLeft: {position: 'absolute', left: 32},
});

HeaderIconLeft.propTypes = {
  iconName: string,
  size: number,
  color: string,
  onPress: func,
};

export default HeaderIconLeft;
