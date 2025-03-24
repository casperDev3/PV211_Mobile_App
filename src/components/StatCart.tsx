import {Text, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

const StatCart = () => {
  const products = useSelector((state: RootState) => state.cart.products);
  const favorite = useSelector((state: RootState) => state.cart.favorite);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Stat Cart</Text>
      </View>
      <View>
        <Text
          style={{
            color: 'green',
          }}>
          Кількість товарів у корзині: {products.length}
        </Text>
        <Text>{products}</Text>
        <Text
          style={{
            color: 'red',
          }}>
          Кількість уподобаних товарів: {favorite.length}
        </Text>
          <Text>{favorite}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default StatCart;
