// import AsyncStorage from '@react-native-async-storage/async-storage';

class Actions {
  addToCart = (id: number) => {
    console.log('addToCart', id);
    console.log('finish addToCart');
  };
  addToFavorite = (id: number) => {
    // AsyncStorage.setItem('favorites', JSON.stringify(id));
    console.log('addToFavorite', id);
  };

  getElementCart = () => {
    // let products = AsyncStorage.getItem('cart') ? AsyncStorage.getItem('cart') : [];
    // products = JSON.parse(products)

    console.log('__product_cart');
    return;
  };
}

const actions = new Actions();
export default actions;
