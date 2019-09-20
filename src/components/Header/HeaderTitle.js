import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {string} from 'prop-types';

const HeaderTitle = ({value, color}) => {
  const additionalStyles = {
    color: color ? color : '#ffffff',
  };

  return <Text style={[styles.headerTitle, additionalStyles]}>{value}</Text>;
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

HeaderTitle.propTypes = {
  color: string,
  value: string,
};

export default HeaderTitle;
