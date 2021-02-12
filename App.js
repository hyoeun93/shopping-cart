import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import Home from './src/screens/Home';
import Electronics from './src/screens/Electronics';
import Books from './src/screens/Books';
import AddItem from './src/components/AddItem';
import Cart from './src/screens/Cart';

import store from './src/store/index';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Electronics"
            component={Electronics}
            options={{
              headerRight: () => <AddItem />,
            }}
          />
          <Stack.Screen
            name="Books"
            component={Books}
            options={{
              headerRight: () => <AddItem />,
            }}
          />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
