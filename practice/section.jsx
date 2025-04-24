import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import Wrapper from '@/Components/UI/wrapper';
import { CustomText } from '@/Components/Custom_text';
import { useRouter } from 'expo-router';

const router = useRouter();
const onPress = () => {
  router.push('/flatlist');
};
const arr = [
  {
    title: 'calories',
    value: 400,
  },
  {
    title: 'Sugar',
    value: 15,
  },
  {
    title: 'protein',
    value: 70,
  },
];
const Section = () => {
  return (
    <Wrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require('@/assets/images/recipe.png')}
          resizeMode="cover"
          style={styles.image}
        />
        <CustomText
          text="Spicy chicken burger with french fries"
          style={styles.title}
        />
        <FlatList
          scrollEnabled={false}
          contentContainerStyle={{ gap: 10, marginBottom: 40 }}
          data={arr}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.touchable} onPress={onPress}>
              <Text style={styles.text1}> {item.title} </Text>
              <Text style={styles.text2}>{item.value}</Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.genView}>
          <CustomText text="Instructions" style={styles.titles} />
          <View style={styles.view}>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text1}>
              Melt the butter in a large pot over medium-high heat. When the
              butter is foaming, add the leeks, carrots, and garlic and cook,
              stirring frequently, until softened, 6–7 minutes. Transfer half of
              the sautéed vegetables to a small bowl.
            </Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>2</Text>
            <Text style={styles.text1}>
              Melt the butter in a large pot over medium-high heat. When the
              butter is foaming, add the leeks, carrots, and garlic and cook,
              stirring frequently, until softened, 6–7 minutes. Transfer half of
              the sautéed vegetables to a small bowl.
            </Text>
          </View>
        </View>
      </ScrollView>
    </Wrapper>
  );
};

export default Section;

const styles = StyleSheet.create({
  image: {
    marginTop: 15,
    width: '100%',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 30,
  },
  titles: {
    fontSize: 18,
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  touchable: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 47,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    padding: 15,
  },
  text1: {
    fontSize: 17,
  },
  text2: {
    fontSize: 18,
    color: 'gray',
  },
  text: {
    fontSize: 25,
    color: 'gray',
  },
  genView: {
    flexDirection: 'column',
    gap: 20,
  },
  view: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});
