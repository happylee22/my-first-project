import { StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import Top from '@/Components/Index/components/top';
import Bottom from '@/Components/Index/components/bottom';

const index = () => {
  return (
    <ImageBackground
      source={require('@/assets/images/background.png')}
      style={styles.container}
    >
      <Top />
      <Bottom />
    </ImageBackground>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
