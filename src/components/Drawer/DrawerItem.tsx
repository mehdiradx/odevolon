/**
 * @format
 */

import React, {ReactElement} from 'react';
import {View} from 'react-native';
import {DrawerItem as RNdrawerItem} from '@react-navigation/drawer';
import {Divider} from '../Kit';
import styles from './DrawerItem.styles';

interface Props {
  navigation: {
    closeDrawer: Function;
  };
  categories: Array<{
    id: number;
    name: string;
  }>;
  setActiveCategoryConnect: Function;
  activeCategory: number;
}

function DrawerItem({
  navigation,
  categories,
  setActiveCategoryConnect,
  activeCategory,
}: Props): ReactElement {
  let DrawerItems;

  DrawerItems = categories.map((item) => (
    <View>
      <RNdrawerItem
        key={item.id}
        label={item.name}
        style={activeCategory === item.id ? styles.active : null}
        onPress={(): void => {
          setActiveCategoryConnect({itemId: item.id});
          navigation.closeDrawer();
        }}
      />
      <Divider />
    </View>
  ));

  return <View style={styles.wrapper}>{DrawerItems}</View>;
}

export default DrawerItem;
