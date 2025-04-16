import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const Search = ({ search, onPress }) => {
  if (search) {
    return (
      <View style={styles.container}>
        <AntDesign name="search1" size={20} color="lightgray" />
        <TextInput style={styles.input} placeholder="Search Recipe" />
      </View>
    );
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <AntDesign name="search1" size={20} color="lightgray" />
      <Text style={[styles.input]} placeholder="Search Recipe"></Text>
    </TouchableOpacity>
  );
};

export default Search;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  icon: {},
  input: {
    color: 'black',
    flex: 1,
  },
});
