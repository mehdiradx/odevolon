import {StyleSheet} from 'react-native';
import {black, gray, white} from '../../constants/variables';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
    borderColor: gray,
    height: 150,
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  image: {
    resizeMode: 'cover',
    height: 150,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    bottom: 20,
    backgroundColor: black,
    opacity: 0.7,
    color: white,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
