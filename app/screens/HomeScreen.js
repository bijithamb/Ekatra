import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {ImagePicker, launchImageLibrary} from 'react-native-image-picker';
import Share from 'react-native-share';
import {useNavigation} from '@react-navigation/native';
import {COLORS, SIZES, Fonts, Dimens} from '../styles/theme';
export default function (props) {
  const navigation = useNavigation();
  return <HomeScreen {...props} navigation={navigation}></HomeScreen>;
}

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagelist: [],
      photo: null,
      isLoading: false,
      response: [],
    };
  }

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    launchImageLibrary(options, response => {
      if (response) {
        this.setState({response: response});
      }
    });
  };
  share = async (customOptions = options) => {
    try {
      await Share.open(customOptions);
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    const {photo, isLoading} = this.state;
    const {imagelist} = this.state;
    const {navigation} = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          width: '100%',
        }}>
        <View
          style={{
            height: 100,
            width: SIZES.width,
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: Dimens.mainPadding,
            paddingVertical: 25,
            backgroundColor: COLORS.secondary,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.white,
              height: 40,
              justifyContent: 'center',
              width: 40,
              alignItems: 'center',
              borderRadius: 40,
              alignContent: 'center',
            }}
            onPress={() => props.navigation.navigate('Home')}>
            <Image
              style={{
                height: 30,
                width: 30,

                resizeMode: 'contain',
              }}
              source={require('../assets/images/Logo.png')}></Image>
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: Fonts.medium,

              fontSize: 20,
              color: COLORS.white,
            }}>
            Ekatra Infotech
          </Text>

          <Image
            style={{height: 20, width: 20, resizeMode: 'contain'}}
            source={require('../assets/images/rightmenu.png')}></Image>
        </View>
        {this.state.response?.assets &&
          this.state.response?.assets.map(({uri}) => (
            <View key={uri} style={{alignSelf: 'center', marginTop: 20}}>
              <Image
                resizeMode="cover"
                resizeMethod="scale"
                style={{width: 200, height: 200}}
                source={{uri: uri}}
              />
              <TouchableOpacity
                style={{marginTop: 20, width: 120, alignSelf: 'center'}}>
                <Button
                  color={COLORS.primary}
                  title="Share image"
                  onPress={async () => {
                    await this.share({
                      title: 'Sharing image file from awesome share app',
                      message: 'Please take a look at this image',
                      url: uri,
                    });
                  }}
                />
              </TouchableOpacity>
            </View>
          ))}
        <TouchableOpacity
          style={{marginTop: 20, width: 120, alignSelf: 'center'}}>
          <Button
            color={COLORS.primary}
            title="Select image"
            onPress={this.handleChoosePhoto}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
