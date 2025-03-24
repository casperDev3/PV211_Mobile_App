import React, {useState, useEffect} from 'react';
import api from '../../utils/api.ts';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ProductItem from '../../components/ProductItem.tsx';

const ProductsScreen = () => {
  // states
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // on mounted
  useEffect(() => {
    try {
      setLoading(true);
      api.getAll('products').then((res: any) => {
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
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Список продуктів</Text>
          </View>
          <ScrollView>
            {products.map((product: any) => {
              return <ProductItem key={product.id} product={product} />;
            })}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#f00',
    ...Platform.select({
      android: {
        marginTop: 26,
      },
      ios: {},
      web: {},
      windows: {},
      macos: {},
    }),
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});

export default ProductsScreen;
