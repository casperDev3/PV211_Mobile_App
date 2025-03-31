import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import HomeScreen from '../screens/home/HomeScreen.tsx';
import ProductsScreen from '../screens/products/ProductsScreen.tsx';
import BottomTab from './TabNavigation.tsx';

export type RootStackParamList = {
  Home: undefined;
  Products: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    //     @ts-ignore
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
