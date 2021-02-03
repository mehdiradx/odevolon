/**
 * @format
 */

import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {IMAGE_SCREEN} from '../../constants/pages';
import styles from './Splash.styles';

interface Props {
  navigation: {
    navigate: Function;
  };
}

function Splash({navigation: {navigate}}: Props) {
  useEffect(() => {
    setTimeout(() => {
      navigate(IMAGE_SCREEN);
    }, 2000);
  }, [navigate]);

  return (
    <View style={styles.wrapper}>
      <Image
        source={require('../../assets/images/odevolon.png')}
        style={styles.logo}
      />
    </View>
  );
}

export default Splash;
