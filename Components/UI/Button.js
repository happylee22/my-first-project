import { CustomText } from '@/Components/Custom_text';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Button = ({ onPress, btnTitle, style, textStyle, icon }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btn, style]}
      activeOpacity={0.8}
    >
      <CustomText text={btnTitle} style={textStyle} />
      {icon && <AntDesign name={icon} color="white" size={20} />}
    </TouchableOpacity>
  );
};

export default Button;
const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  text: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
});
