import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import HeaderTitle from '@/Components/UI/headerTitle';
import Wrapper from '@/Components/UI/wrapper';
import Section from '../practice/section';
import { useFetchDetails } from '../hooks/use-fetch-detail';
import { Loading } from '@/Components/UI/loading';
import { RecipeDetail } from '../Components/detail/recipe-detail';
const ProductId = () => {
  const { id } = useLocalSearchParams();
  const { loading, data } = useFetchDetails(id);
  if (loading) {
    return <Loading />;
  }

  console.log(data);

  return (
    <Wrapper>
      <HeaderTitle showBtn title={'Details'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <RecipeDetail data={data} />
      </ScrollView>
    </Wrapper>
  );
};

export default ProductId;
