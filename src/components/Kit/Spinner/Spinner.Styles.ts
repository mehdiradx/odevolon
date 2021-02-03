/**
 * @format
 */

import {StyleSheet} from 'react-native';
import {black, white} from '../../../constants/variables';

export default StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: '20%',
    left: '45%',
    width: 50,
    height: 50,
    backgroundColor: white,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
