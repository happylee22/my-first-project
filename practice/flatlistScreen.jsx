import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Button,
} from 'react-native';
import React, { useState } from 'react';
import Wrapper from '@/Components/UI/wrapper';
import { TextInput } from 'react-native';

const FlatlistScreen = () => {
  const [value, setValue] = useState('');
  const [store, setStore] = useState([]);
  console.log(store);

  const display = () => {
    if (value.length > 3) {
      setStore((prevData) => [...prevData, value]);
      setValue('');
    }
  };

  return (
    <Wrapper>
      <View style={{ flexDirection: 'row', gap: 5 }}>
        <TextInput
          placeholder="Enter a value"
          value={value}
          onChangeText={setValue}
          style={styles.input}
        />
        <Pressable onPress={display} style={styles.pressable}>
          <Text style={{ color: 'white', fontSize: 20 }}>ADD</Text>
        </Pressable>
      </View>

      <FlatList
        contentContainerStyle={{ gap: 10 }}
        data={store}
        renderItem={({ item }) => (
          <View style={styles.view}>
            <Text style={{ color: 'white', fontSize: 20 }}>{item}</Text>
          </View>
        )}
      />
    </Wrapper>
  );
};

export default FlatlistScreen;
const styles = StyleSheet.create({
  input: {
    backgroundColor: 'lightgray',
    height: 50,
    width: '80%',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 200,
  },
  view: {
    backgroundColor: 'skyblue',
    height: 50,
    padding: 10,
    borderRadius: 10,
  },
  pressable: {
    backgroundColor: 'skyblue',
    width: '20%',
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    padding: 15,
  },
});
