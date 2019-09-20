import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

import ScreenContainer from 'components/ScreenContainer';
import {Button} from 'components/Buttons';
import colors from 'constants/Colors';

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
    const {primaryThemeColor, secondaryThemeColor} = colors;

    return (
      <ScreenContainer>
        <View style={styles.wrapper}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri:
                  'https://seeklogo.com/images/F/facebook-messenger-logo-1B1179FB01-seeklogo.com.png',
              }}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <Button
              color={primaryThemeColor}
              value="SIGN IN"
              onPress={this.onSignInPress}
              additionalStyles={styles.buttonAdditionalStyles}
            />
            <Button
              color={secondaryThemeColor}
              value="SIGN UP"
              onPress={this.onSignUpPress}
            />
          </View>
        </View>
      </ScreenContainer>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: 'space-around',
  },
  buttonsContainer: {
    paddingHorizontal: 40,
  },
  imageContainer: {
    height: 200,
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
  },
  buttonAdditionalStyles: {marginBottom: 10},
});

export default WelcomeScreen;
