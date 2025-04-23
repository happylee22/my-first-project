import { View, Text, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import HeaderTitle from '@/Components/UI/headerTitle';
import Wrapper from '@/Components/UI/wrapper';

import { useRouter } from 'expo-router';
import { Featured } from '@/Components/Home/featured';
import { Loading } from '@/Components/UI/loading';
import { useFetchData } from '@/hooks/use-fetch-data';
import { FilterRecipe } from '@/Components/Home/filter-recipe';
import { SearchInput } from '@/Components/UI/Seearch-Input';

const HomeScreen = () => {
  const router = useRouter();
  const { loading, data } = useFetchData();
  const onPress = () => {
    router.push('/search');
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={{ flex: 1 }}>
      <Wrapper>
        <HeaderTitle title="Home" showBtn={false} />
        <SearchInput search={false} onPress={onPress} />
        <Featured data={data} />
        <FilterRecipe />
      </Wrapper>
    </View>
  );
};

export default HomeScreen;
