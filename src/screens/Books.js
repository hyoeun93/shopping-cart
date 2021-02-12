import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { books } from '../../data';
import List from '../components/List';

export default function Books({ route }) {
  return (
    <View style={styles.container}>
      <List items={books} onPress={route.params.addItems} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
