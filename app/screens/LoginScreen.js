import { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {
  ErrorMessage,
  Form,
  AppFormField,
  SubmitButton,
} from '../components/forms';
import authApi from '../api/auth';
import useAuth from '../auth/useAuth';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'), // label method takes label for displaying errors on this input field
  password: Yup.string().required().min(4).label('Password'),
});

export default function LoginScreen() {
  const { logIn } = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    logIn(result.data);
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <Form
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='email'
          keyboardType='email-address'
          name='email'
          placeholder='Email'
          textContentType='emailAddress'
        />
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          name='password'
          placeholder='Password'
          secureTextEntry
          textContentType='password'
        />
        <ErrorMessage
          error='Invalid email and/or password.'
          visible={loginFailed}
        />
        <SubmitButton title='Login' />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 35,
    marginBottom: 30,
  },
});
