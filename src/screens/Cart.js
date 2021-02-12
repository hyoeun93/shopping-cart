import React from 'react';
import { StyleSheet, View } from 'react-native';

import List from '../components/List';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../action/index';

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state);

  function removeItem(id) {
    return dispatch(deleteItem(id));
  }
  return (
    <View style={styles.container}>
      <List items={items} onPress={removeItem} cart={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
