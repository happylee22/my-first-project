import { View, Text } from 'react-native';
import React from 'react';
import HeaderTitle from '@/Components/UI/headerTitle';
import Wrapper from '@/Components/UI/wrapper';
import Search from '@/Components/UI/Seearch-Input';
import { useRouter } from 'expo-router';
const home = () => {
  const router = useRouter();
  const onPress = () => {
    router.push('/search');
  };
  return (
    <View style={{ flex: 1 }}>
      <Wrapper>
        <HeaderTitle title="Home" showBtn={false} />
        <Search search={false} onPress={onPress} />
      </Wrapper>
    </View>
  );
};

export default home;
