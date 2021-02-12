import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { electronics } from '../../data';
import List from '../components/List';

export default function Electronics({ route }) {
  return (
    <View style={styles.container}>
      <List items={electronics} onPress={route.params.addItems} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
