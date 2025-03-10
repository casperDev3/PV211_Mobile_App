import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import actions from '../utils/actions.ts';

const ProductItem = ({product}: any) => {
  return (
    <View style={style.card} key={product.id}>
      <Text>{product.title}</Text>
      <View>
        <TouchableOpacity
          onPressIn={() => {
            actions.addToCart(product.id);
          }}>
          <Text>Додати в корзину</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            actions.addToCart(product.id);
          }}>
          <Text>Додати в улюблене</Text>
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
