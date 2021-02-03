import React from 'react';
import {
  View,
  ViewStyle,
  ActivityIndicator,
  StyleProp,
  ColorValue,
} from 'react-native';
import {primaryColor} from '../../../constants/variables';
import styles from './Spinner.Styles';

interface Props {
  size?: number | 'small' | 'large';
  color?: ColorValue;
  style?: StyleProp<ViewStyle>;
}

function Spinner({size = 'large', color = primaryColor, style = {}}: Props) {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size={size} color={color} style={style} />
    </View>
  );
}

export default Spinner;
