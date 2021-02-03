/**
 * @format
 */

import React from 'react';
import {View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import styles from './HeaderLeft.styles';

const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}>
        <Image
          source={require('../../../assets/images/hamburger.png')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderLeft;
