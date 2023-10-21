import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Alert } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';
import { passwordValidator, phoneNumberValidator } from '../core/utils';
import { Navigation } from '../types';
import AuthService from '../services/AuthService';
import { useAuth } from '../contexts/AuthContext';
import { Snackbar } from 'react-native-paper';

type Props = {
  navigation: Navigation;
};

const SignInScreen = ({ navigation }: Props) => {
  const [buyerPhone, setBuyerPhone] = useState({ value: '+84', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [visibleSnackbar, setVisibleSnackbar] = useState(false);
  const [loginError, setLoginError] = useState('');

  const showSnackbar = () => {
    setVisibleSnackbar(true);
  };

  const { signIn } = useAuth();

  const handleLogin = async () => {
    const passwordError = passwordValidator(password.value);
    const buyerPhoneError = phoneNumberValidator(buyerPhone.value);

    if (buyerPhoneError || passwordError) {
      setLoginError('Invalid phone number or password');
      showSnackbar();
      return;
    }

    const formData = new FormData();
    formData.append('buyerPhone', buyerPhone.value);
    formData.append('password', password.value);

    try {
      const response = await fetch('http://149.28.134.133/api/v1/account/login-by-phone', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      if (response.status === 200) {
        const responseData = await response.json();
        // Save the token using AuthService
        await AuthService.shared.setCredentials(responseData.result.account.token);
        // Save the user info using AuthService
        await AuthService.shared.setUserInfo(responseData.result.account);
        // Sign in
        signIn(buyerPhone.value, password.value);
        // Show success message
        setLoginError('Login successful!');
        showSnackbar();
      } else if (response.status === 401) {
        setLoginError('Invalid phone number or password');
        showSnackbar();
      } else {
        console.error('Login error:', response.status);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <Background>
      <Logo />
      <Header>Welcome back.</Header>
      <TextInput
        label="Buyer Phone"
        returnKeyType="next"
        value={buyerPhone.value}
        onChangeText={(text) => setBuyerPhone({ value: '+' + text.replace(/\D/g, ''), error: '' })}
        error={!!buyerPhone.error}
        errorText={buyerPhone.error}
        autoCapitalize="none"
        keyboardType="numeric"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Snackbar
        visible={visibleSnackbar}
        onDismiss={() => setVisibleSnackbar(false)}
        duration={4000}
        action={{
          label: 'Undo',
          onPress: () => {
            setBuyerPhone({ value: '+84', error: '' })
            setPassword({ value: '', error: '' })
          },
        }}
      >
        {loginError || 'Please fill in Buyer Phone & Password fields.'}
      </Snackbar>

      <View style={styles.forgotPassword}>
        <TouchableOpacity onPress={() => Alert.alert('Not implemented yet')}>
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={handleLogin}>
        Login
      </Button>
      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => Alert.alert('Not implemented yet')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(SignInScreen);