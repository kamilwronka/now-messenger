import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {NavigationActions} from 'react-navigation';

import ScreenContainer from 'components/ScreenContainer';
import {Button} from 'components/Buttons';
import {Header, HeaderTitle, HeaderIconLeft} from 'components/Header';
import colors from 'constants/Colors';

import LoginForm from './components/LoginForm';

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  goBack = () => {
    const backAction = NavigationActions.back();
    this.props.navigation.dispatch(backAction);
  };

  render() {
    return (
      <ScreenContainer>
        <Header>
          <HeaderIconLeft
            onPress={this.goBack}
            iconName="chevron-left"
            color="#ffffff"
            size={28}
          />
          <HeaderTitle value="SIGN IN" color="#ffffff" />
        </Header>
        <LoginForm />
      </ScreenContainer>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {},
});

export default LoginScreen;
