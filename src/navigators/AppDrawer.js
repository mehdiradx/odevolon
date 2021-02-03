/**
 * @format
 */

import React, {ReactElement} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Categories, ImagesList} from '../screens';
import {DRAWER_SCREEN} from '../constants/pages';

const Drawer = createDrawerNavigator();

function AppDrawer(): ReactElement {
  return (
    <Drawer.Navigator
      drawerContent={(props): ReactElement => <Categories {...props} />}>
      <Drawer.Screen name={DRAWER_SCREEN} component={ImagesList} />
    </Drawer.Navigator>
  );
}

export default AppDrawer;
