import {StyleSheet} from 'react-native';
import {primaryColor, secondaryColor, white} from '../../constants/variables';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: white,
  },
  active: {
    backgroundColor: secondaryColor,
    borderWidth: 1,
    borderColor: primaryColor,
    opacity: 0.7,
  },
});
