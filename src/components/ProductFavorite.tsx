import {Text, View} from 'react-native';
import api from '../utils/api.ts';
import {useState, useEffect} from 'react';

interface FavoriteProps {
  productId: string | number;
}

interface FavoriteProductsState {
  title: string,
}

const ProductFavorite = ({productId}: FavoriteProps) => {
  const [product, setProduct] = useState<FavoriteProductsState>();
  useEffect(() => {
    api.getOne('products', productId).then(res => {
      setProduct(res);
    });
  }, [productId]);
  return (
    <>
      <View>
        <Text>{product?.title}</Text>
      </View>
    </>
  );
};

export default ProductFavorite;
