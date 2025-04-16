import { View, Text } from 'react-native';
import React from 'react';

const wrapper = ({ children }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 15 }}>
      {children}
    </View>
  );
};

export default wrapper;
