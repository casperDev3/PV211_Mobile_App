import React from 'react';
// import HomeScreen from './src/screens/home/HomeScreen.tsx';
import ProductsScreen from './src/screens/products/ProductsScreen';
import StatCart from './src/components/StatCart.tsx';
import FProducts from './src/sections/favorite/Products.tsx';
import store from './src/store';
import {Provider} from 'react-redux';

function App(): React.JSX.Element {
  return (
    <>
      <Provider store={store}>
        <StatCart />
        <FProducts />
        <ProductsScreen />
      </Provider>
    </>
  );
}

export default App;
