import { SearchComponent } from '../Components/search';
import { useState } from 'react';
import { Loading } from '@/Components/UI/loading';
import { SearchInput } from '@/Components/UI/Seearch-Input';
import HeaderTitle from '@/Components/UI/headerTitle';
import Wrapper from '@/Components/UI/wrapper';
import { useFilterData } from '../hooks/use-filter-data';

//import { useFilterData } from '@/hooks/use-filter-data';

const Search = () => {
  const [name, setName] = useState('');
  const { loading, filteredData, data } = useFilterData(name);

  if (loading) {
    return <Loading />;
  }

  console.log({ data });

  return (
    <Wrapper>
      <HeaderTitle title="Search recipes" showBtn={true} />
      <SearchInput search={true} value={name} setValue={setName} />
      <SearchComponent data={filteredData} />
    </Wrapper>
  );
};

export default Search;
