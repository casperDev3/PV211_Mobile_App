import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {addToFavorite, addToCart} from "../store/slices/cartSlice.ts";

const ProductItem = ({product}: any) => {
    const dispatch = useDispatch();
  return (
    <View style={style.card} key={product.id}>
      <Text>{product.title}</Text>
      <View>
        <TouchableOpacity
          onPressIn={() => {
            dispatch(addToCart(product.id));
          }}>
          <Text
            style={{
              color: 'green',
            }}>
            Додати в корзину
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch(addToFavorite(product.id));
          }}>
          <Text
            style={{
              color: 'red',
            }}>
            Додати в улюблене
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  card: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default ProductItem;
