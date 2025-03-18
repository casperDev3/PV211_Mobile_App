import React from 'react';
import HomeScreen from './src/screens/home/HomeScreen.tsx';
import {NavigationContainer} from '@react-navigation/native';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
import StackNavigator from './src/navigation/StackNavigator.tsx';

function App(): React.JSX.Element {
  return (
    <>
      {/*<HomeScreen />*/}
      {/*<GestureHandlerRootView style={{flex: 1}}>*/}
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      {/*</GestureHandlerRootView>*/}
    </>
  );
}

export default App;
