import { Loading } from '@/Components/UI/loading';
import { useFetchData } from '@/hooks/use-fetch-data';
import { CategoryMealsList } from './category-meals-list';
export const CategoryMeals = ({ selectedTag }) => {
  const { data, loading } = useFetchData(selectedTag);
  if (loading) {
    return <Loading />;
  }

  return <CategoryMealsList data={data} />;
};
