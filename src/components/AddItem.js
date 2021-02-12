import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function AddItem() {
  const count = useSelector((state) => state);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>{count.length}</Text>
      <AntDesign
        name="shoppingcart"
        size={24}
        onPress={() => navigation.navigate('Cart')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
});
