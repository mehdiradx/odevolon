import {StyleSheet} from 'react-native';
import {primaryColor} from '../../constants/variables';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: primaryColor,
  },
  logo: {
    height: 200,
    width: 200,
    marginBottom: 60,
  },
});
