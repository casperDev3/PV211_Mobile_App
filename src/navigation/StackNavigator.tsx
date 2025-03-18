import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import HomeScreen from '../screens/home/HomeScreen.tsx';
import ProductsScreen from '../screens/products/ProductsScreen.tsx';


export type RootStackParamList = {
    Home: undefined;
    Products: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Products" component={ProductsScreen} />
        </Stack.Navigator>
    );
}

