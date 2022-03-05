import React, {Component} from 'react';
import {View, ImageBackground, Image, StatusBar} from 'react-native';
import {COLORS} from '../styles/theme';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('Loginscreen');
    }, 5000);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor={COLORS.primary}
          barStyle="dark-content"></StatusBar>

        <Image
          style={{
            resizeMode: 'contain',
            position: 'absolute',
            height: '50%',
            width: '70%',
            top: '20%',
            alignSelf: 'center',
          }}
          source={require('../assets/images/Logo.png')}></Image>
      </View>
    );
  }
}

export default SplashScreen;
