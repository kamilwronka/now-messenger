import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Formik} from 'formik';

import {TextInput} from 'components/Inputs';
import {Button} from 'components/Buttons';

import colors from 'constants/Colors';

class LoginForm extends React.Component {
  render() {
    return (
      <View style={styles.formContainer}>
        <Formik onSubmit={values => console.log(values)}>
          {props => (
            <>
              <TextInput
                onChangeText={props.handleChange('email')}
                iconName="email"
                placeholder="E-mail"
              />
              <TextInput
                onChangeText={props.handleChange('password')}
                iconName="lock-question"
                placeholder="Password"
                additionalStyles={styles.input}
              />
              <Button
                value="SIGN IN"
                color={colors.secondaryThemeColor}
                onPress={props.handleSubmit}
                additionalStyles={styles.submitButton}
              />
            </>
          )}
        </Formik>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 40,
    paddingVertical: 40,
  },
  submitButton: {
    marginTop: 20,
  },
  input: {
    marginTop: 10,
  },
});

export default LoginForm;
