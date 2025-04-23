import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import HeaderTitle from '@/Components/UI/headerTitle';
import Wrapper from '@/Components/UI/wrapper';

const ProductId = () => {
  const { id } = useLocalSearchParams();

  return (
    <Wrapper>
      <HeaderTitle showBtn title={'Details'} />
      <Text>ProductId: {id}</Text>
    </Wrapper>
  );
};

export default ProductId;
