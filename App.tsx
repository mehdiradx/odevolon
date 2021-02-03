/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import createStore from './src/redux/createStore';
import AppContainer from './src/navigators/AppContainer';

declare const global: {HermesInternal: null | {}};

const {store} = createStore();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </>
  );
};

export default App;
