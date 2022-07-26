import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';
import Person from './Person';

const initialUrl = 'https://swapi.dev/api/people/';
const fetchUrl = async ({ pageParam = initialUrl }) => {
  const response = await fetch(pageParam);
  return response.json();
};

const InfinitePeople = () => {
  const { data, fetchNextPage, hasNextPage, error, isFetching, status } =
    useInfiniteQuery(['sw-people'], fetchUrl, {
      getNextPageParam: (lastPage, pages) => lastPage.next || undefined,
    });

  return status === 'loading' ? (
    <div className="loading">Loading...</div>
  ) : status === 'error' ? (
    <div>Error! {error.toString()}</div>
  ) : (
    <>
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        {data.pages.map((pageData) =>
          pageData.results.map((person) => (
            <Person
              key={person.name}
              name={person.name}
              hairColor={person.hair_color}
              eyeColor={person.eye_color}
            />
          ))
        )}
      </InfiniteScroll>
      {isFetching ? <div className="loading">Loading...</div> : null}
    </>
  );
};

export default InfinitePeople;
