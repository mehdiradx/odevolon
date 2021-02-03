/**
 * @format
 */

import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import {ImagesListCard} from '../../components';
import {EmptyComponent, Spinner} from '../../components/Kit';
import {load} from '../../redux/modules/images';

export interface Props {
  loading: boolean;
  data: Array<{
    id: string;
    url: string;
    categories: Array<{
      id: string;
      name: string;
    }>;
  }>;
  loadConnect: Function;
  navigation: {
    navigate: Function;
  };
  route: {
    params: {
      itemId: number;
    };
  };
  activeCategory: number;
}

const ImagesList: React.FC<Props> = ({
  loading,
  data,
  loadConnect,
  activeCategory,
}) => {
  useEffect(() => {
    loadConnect({itemId: activeCategory});
  }, [activeCategory, loadConnect]);

  const onEndReached = () => {
    loadConnect({append: true, itemId: activeCategory});
  };

  const renderEmptyComponent = () => {
    return <EmptyComponent text="There isn't any item" />;
  };

  return (
    <>
      {data.length > 0 ? (
        <FlatList
          numColumns={2}
          data={data}
          onEndReached={onEndReached}
          renderItem={({item}) => <ImagesListCard item={item} />}
          refreshing={loading}
          keyExtractor={(item: {id: number}) => item.id.toString()}
          onEndReachedThreshold={0.1}
          ListEmptyComponent={renderEmptyComponent}
        />
      ) : null}
      {loading ? <Spinner /> : null}
    </>
  );
};

export default connect(
  (state) => ({
    data: state.images.data,
    loading: state.images.loading,
    activeCategory: state.categories.activeCategory,
  }),
  {
    loadConnect: load,
  },
)(ImagesList);
