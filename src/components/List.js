import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';

export default function List({ items, onPress, cart }) {
  function onSaveItem({ item }) {
    const { id, name, price } = item;
    onPress({ id, name, price });
  }
  function onDeleteItem({ item }) {
    onPress(item.id);
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.textContainer}>
            <Text>Name: {item.name}</Text>
            <Text>Price: ${item.price}</Text>
            {cart === true ? (
              <TouchableOpacity onPress={() => onDeleteItem({ item })}>
                <Text style={styles.buttonText}>Remove the Item</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => onSaveItem({ item })}>
                <Text style={styles.buttonText}>Add to a Cart</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginHorizontal: 20,
  },
  textContainer: {
    marginBottom: 20,
  },
  buttonText: {
    color: 'blue',
    marginTop: 10,
  },
});
