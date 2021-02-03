import {StyleSheet} from 'react-native';
import {black, primaryText} from '../../constants/variables';

export default StyleSheet.create({
  wrapper: {
    height: 150,
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: 150,
  },
  text: {
    margin: 20,
    color: primaryText,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
