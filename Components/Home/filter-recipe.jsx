import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { Categories } from '@/Components/Home/categories';

export const FilterRecipe = () => {
  const [filter, setFilter] = useState('');

  return (
    <View style={styles.container}>
      <Categories />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
