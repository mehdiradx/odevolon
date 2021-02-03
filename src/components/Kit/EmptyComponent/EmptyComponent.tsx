import React from 'react';
import {View, Text} from 'react-native';
import styles from './EmptyComponent.styles';

interface Props {
  text: string;
}

function EmptyComponent({text}: Props) {
  return (
    <View style={styles.wrappert}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

export default EmptyComponent;
