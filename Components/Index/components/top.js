import { Image, StyleSheet, View } from 'react-native';
import { CustomText } from '@/Components/Custom_text';

const Top = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/chef.png')}
        styles={styles.image}
      />
      <CustomText text="100K Premium Recipe" style={styles.text} />
    </View>
  );
};

export default Top;
const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    ObjectFit: 'contain',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    flex: 0.3,
    gap: 10,
  },
});
