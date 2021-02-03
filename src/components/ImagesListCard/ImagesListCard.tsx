/**
 * @format
 */

import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './ImagesListCard.styles';
import texts from '../../constants/texts';

interface Props {
  item: {
    url: string;
    id: number;
  };
}

function ImagesListCard({item: {url, id}}: Props) {
  return (
    <View style={styles.wrapper}>
      <Image source={{uri: url}} style={styles.image} />
      <Text style={styles.text}>
        {texts.ID} {id}
      </Text>
    </View>
  );
}

export default ImagesListCard;
