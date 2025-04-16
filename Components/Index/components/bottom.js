import { View, StyleSheet } from 'react-native';
import React from 'react';
import { CustomText } from '@/Components/Custom_text';
import Button from '@/Components/UI/Button';
import { useRouter } from 'expo-router';

const Bottom = () => {
  const router = useRouter();
  const onPress = () => {
    router.replace('/home');
  };

  return (
    <View style={styles.container}>
      <CustomText text="Get" style={styles.title} />
      <CustomText text="cooking" style={styles.title} />
      <CustomText text="Simple way to find tasty Recipe" style={styles.text} />
      <Button
        btnTitle="Get Cooking"
        icon="arrowright"
        style={{ marginTop: 30 }}
        onPress={onPress}
      />
    </View>
  );
};

export default Bottom;
const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  btn: {},
});
