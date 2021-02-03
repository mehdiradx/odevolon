/**
 * @format
 */

import React, {ReactElement} from 'react';
import {View, ImageBackground, Text} from 'react-native';
import styles from './DrawerHeader.styles';
import texts from '../../constants/texts';

function DrawerHeader(): ReactElement {
  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={require('../../assets/images/infoBackground.png')}
        style={styles.image}>
        <Text style={styles.text}>{texts.WELCOME}</Text>
      </ImageBackground>
    </View>
  );
}

export default DrawerHeader;
