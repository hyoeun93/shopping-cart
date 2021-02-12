import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../action/index';

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const addItems = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Electronics', { addItems })}
      >
        <Text>Electronics</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Books', { addItems })}
      >
        <Text>Books</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
