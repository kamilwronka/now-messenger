import React from 'react';
import {View, TouchableWithoutFeedback, StyleSheet, Text} from 'react-native';
import {noop} from 'lodash';
import {string, object, func} from 'prop-types';

import colors from 'constants/Colors';

const Button = ({color, value, onPress, additionalStyles}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.button, {backgroundColor: color}, additionalStyles]}>
        <Text style={styles.buttonText}>{value}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    width: '100%',
    backgroundColor: colors.secondaryThemeColor,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: '#ffffff',
  },
});

Button.defaultProps = {
  additionalStyles: {},
  onPress: noop,
  value: '',
};

Button.propTypes = {
  value: string,
  additionalStyles: object,
  onPress: func,
  color: string,
};

export default Button;
