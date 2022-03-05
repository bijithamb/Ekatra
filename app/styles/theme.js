import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#0072BB',
  secondary: '#129549',
  buttoncolor: '#ED1B24',
  fontcolor: '#1D201F',
  white: '#ffff',
  textinputcontainer: '#F0F3F8',
};

export const Fonts = {
  default: Platform.OS === 'ios' ? 'Poppins-Regular' : 'Poppins_Regular',
  medium: Platform.OS === 'ios' ? 'Poppins-Medium' : 'Poppins_Medium',
  semiBold: Platform.OS === 'ios' ? 'Poppins-SemiBold' : 'Poppins_SemiBold',
};
export const Dimens = {
  mainPadding: 10,
  largePadding: 24,
  mediumPadding: 12,
  smallPadding: 2,
};

export const SIZES = {
  base: 10,
  width,
  height,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,
};

const theme = {COLORS, SIZES, Fonts};

export default theme;
