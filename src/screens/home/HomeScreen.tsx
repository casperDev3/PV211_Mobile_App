import React, {useState, useEffect} from 'react';
import api from '../../utils/api.ts';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import ProductItem from '../../components/ProductItem.tsx';

const HomeScreen = () => {
  // states
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // handlers
  const handleClearCount = () => {
    setCount(0);
  };

  // on mounted
  useEffect(() => {
    try {
      setLoading(true);
      api.getAll('products').then((res: any) => {
        console.log('__res___', res);
        setProducts(res as any);
      });
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);
  return (
    <>
      <SafeAreaView>
        <View style={style.container}>
          <Text style={style.text}>Home Screen</Text>
        </View>
        <View>
          <Text>{count}</Text>
          <TouchableOpacity
            onPress={() => {
              setCount(count + 1);
            }}>
            <Text>Збільшити на 1</Text>
          </TouchableOpacity>
          <Button
            title={'Змешити на 1'}
            onPress={() => {
              setCount(count - 1);
            }}
          />
          <TouchableOpacity onPress={handleClearCount}>
            <Text>Очистити ++</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {products.map((product: any) => {
            return <ProductItem key={product.id} product={product} />;
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#f00',
    ...Platform.select({
      android: {
        marginTop: 26,
      },
      // ios: {},
      // web: {},
      // windows: {},
      // macos: {},
    }),
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default HomeScreen;
