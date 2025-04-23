import { Text, View } from 'react-native';
import { CategoryMealsList } from '@/Components/Home/category-meals-list';
export const SearchComponent = ({ data }) => {
  return <CategoryMealsList data={data} numColumns={2} />;
};
