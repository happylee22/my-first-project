import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { CustomText } from '@/Components/Custom_text';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const HeaderTitle = ({ title, showBtn }) => {
  const router = useRouter();
  const onPress = () => {
    router.back();
  };
  return (
    <View style={styles.container}>
      {showBtn ? (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
          <AntDesign name="arrowleft" size={25} color="black" />
        </TouchableOpacity>
      ) : (
        <View />
      )}

      <CustomText text={title} style={styles.title} />
      <View />
    </View>
  );
};

export default HeaderTitle;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#000',
  },
});
