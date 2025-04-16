import { Text, StyleSheet } from 'react-native';

export const CustomText = ({ text, style }) => {
  console.log({ text }, 34);

  return <Text style={[styles.text, style]}>{text}</Text>;
};
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#fff',
  },
});
