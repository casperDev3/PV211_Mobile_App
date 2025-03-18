import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home Screen</Text>
        </View>
        <Button title={'Products'} onPress={() => {
            navigation.navigate('Products');
        }}  />
    </>
  );
};

export default HomeScreen;
