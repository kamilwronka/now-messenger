import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ScreenContainer from 'components/ScreenContainer';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import {primaryThemeColor, secondaryThemeColor} from 'constants/Colors';

class WelcomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  onSignInPress = () => {
    this.props.navigation.navigate('LoginScreen');
  };

  onSignUpPress = () => {
    this.props.navigation.navigate('SignUpScreen');
  };

  render() {
    return (
      <ScreenContainer style={{flex: 1}}>
        <Text>Dupa</Text>
        <View>
          <TouchableWithoutFeedback>
            <View
              style={{...styles.button, backgroundColor: primaryThemeColor}}>
              <Text>Sign In</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View
              style={{...styles.button, backgroundColor: secondaryThemeColor}}>
              <Text>Sign Up</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScreenContainer>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: 200,
    backgroundColor: secondaryThemeColor,
  },
});

export default WelcomeScreen;
