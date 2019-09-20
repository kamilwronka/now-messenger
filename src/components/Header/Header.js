import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {node} from 'prop-types';

const {width} = Dimensions.get('window');

const Header = ({children}) => {
  return <View style={styles.header}>{children}</View>;
};

const styles = StyleSheet.create({
  header: {
    height: 56,
    width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Header.propTypes = {
  children: node,
};

export default Header;
