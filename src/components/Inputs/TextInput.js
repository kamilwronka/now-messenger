import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TextInput, View, StyleSheet} from 'react-native';
import {omit} from 'lodash';

const RoundInput = props => {
  const {iconSize, iconColor, iconName, additionalStyles} = props;
  const inputProps = omit(props, [
    'additionalStyle',
    'icon',
    'iconSize',
    'iconColor',
    'iconName',
  ]);

  return (
    <View style={[styles.inputContainer, additionalStyles]}>
      {iconName && <Icon name={iconName} size={iconSize} color={iconColor} />}
      <TextInput style={styles.input} {...inputProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 24,
    paddingLeft: 10,
    zIndex: 3,
  },
  input: {paddingLeft: 6, height: 48, flex: 1},
});

RoundInput.defaultProps = {
  iconSize: 24,
  iconColor: '#040D16',
  iconName: null,
};

export default RoundInput;
