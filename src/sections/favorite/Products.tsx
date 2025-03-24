import ProductFavorite from '../../components/ProductFavorite.tsx';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

const FProducts = () => {
  const productsIds = useSelector((state: RootState) => state.cart.favorite);
  return (
    <>
      <Text
        style={{
          fontSize: 20,
          color: 'red',
          marginTop: 10,
        }}>
        Список обраних:
      </Text>
      {productsIds.length > 0 &&
        productsIds.map((productId, index) => (
          <ProductFavorite key={index} productId={productId} />
        ))}
    </>
  );
};

export default FProducts;
