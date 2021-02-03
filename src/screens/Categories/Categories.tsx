/**
 * @format
 */

import React, {ReactElement, useEffect} from 'react';
import {connect} from 'react-redux';
import {load, setActiveCategory} from '../../redux/modules/categories';
import {DrawerHeader, DrawerItem} from '../../components';
import {ScrollViewCard} from '../../components/Kit';

interface Props {
  loadConnect: Function;
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

function Categories({
  navigation,
  loadConnect,
  categories,
  setActiveCategoryConnect,
  activeCategory,
}: Props): ReactElement {
  useEffect(() => {
    loadConnect();
  }, [loadConnect]);

  return (
    <ScrollViewCard>
      <DrawerHeader />
      <DrawerItem
        navigation={navigation}
        categories={categories}
        setActiveCategoryConnect={setActiveCategoryConnect}
        activeCategory={activeCategory}
      />
    </ScrollViewCard>
  );
}

export default connect(
  (state) => ({
    categories: state.categories.categories,
    activeCategory: state.categories.activeCategory,
  }),
  {
    loadConnect: load,
    setActiveCategoryConnect: setActiveCategory,
  },
)(Categories);
