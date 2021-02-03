/**
 * @format
 */

import React from 'react';
import {ScrollView} from 'react-native';
import styles from './ScrollViewCard.styles';

interface Props {
  children: React.ReactNode[];
}

function ScrollViewCard({children}: Props) {
  return <ScrollView style={styles.wrapper}>{children}</ScrollView>;
}

export default ScrollViewCard;
