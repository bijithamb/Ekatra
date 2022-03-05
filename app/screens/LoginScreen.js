import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  Button,
  Alert,
  ActivityIndicator,
} from 'react-native';

import {COLORS, Fonts} from '../styles/theme';
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showalert: false,
    };
  }

  Validation() {
    if (this.state.email == 'admin' && this.state.password == 'admin')
      this.props.navigation.replace('Homescreen');
    else Alert.alert('Please enter your correct email or password');
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <StatusBar
          backgroundColor={COLORS.primary}
          barStyle="dark-content"></StatusBar>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <View
              style={{
                width: '92%',
                backgroundColor: '#F3F5F9',
                marginTop: '10%',
                alignSelf: 'center',
                paddingHorizontal: 14,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}>
              <Image
                style={{
                  resizeMode: 'contain',

                  height: '30%',
                  width: '70%',

                  alignSelf: 'center',
                }}
                source={require('../assets/images/Logo.png')}></Image>
              <TextInput
                placeholder="Username"
                placeholderTextColor="#808e9b"
                style={styles.input}
                onChangeText={text => this.setState({email: text})}
              />

              <TextInput
                placeholder="Password"
                placeholderTextColor="#808e9b"
                style={styles.input}
                secureTextEntry={true}
                textContentType="password"
                onChangeText={text => this.setState({password: text})}
              />

              <TouchableOpacity
                onPress={() => this.Validation()}
                style={styles.loginButton}>
                {this.state.isLoading ? (
                  <ActivityIndicator size="small" color="#ffff" />
                ) : (
                  <Text style={styles.loginButtonText}>Login</Text>
                )}
              </TouchableOpacity>

              <View style={styles.signUpTextView}>
                <Text style={styles.signUpText}>Don't have an account?</Text>
                <TouchableOpacity>
                  <Text style={[styles.signUpText, {color: COLORS.primary}]}>
                    {' Sign Up'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  inner: {
    flex: 1,
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
  welcomeText: {
    fontSize: 30,

    color: COLORS.fontcolor,
    alignSelf: 'center',
    fontFamily: Fonts.default,
  },
  loginText: {
    color: COLORS.fontcolor,
    fontSize: 25,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
    fontFamily: Fonts.default,
  },
  input: {
    width: '95%',
    height: 50,
    marginTop: 20,
    fontSize: 16,
    color: '#808e9b',
    alignSelf: 'center',
    fontFamily: Fonts.default,
    borderBottomWidth: 2,
    borderColor: COLORS.primary,
  },
  fpText: {
    alignSelf: 'flex-end',
    color: COLORS.fontcolor,
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    fontFamily: Fonts.default,
  },
  loginButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 20,
    width: '95%',
    alignSelf: 'center',
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fafafa',
    alignSelf: 'center',
    fontFamily: Fonts.default,
  },
  loginWithBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  iconButton: {
    backgroundColor: '#333',
    padding: 14,
    marginHorizontal: 10,
    borderRadius: 100,
  },
  signUpTextView: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpText: {
    color: COLORS.fontcolor,
    fontSize: 15,
    fontWeight: '500',
    fontFamily: Fonts.default,
  },
});
export default LoginScreen;
