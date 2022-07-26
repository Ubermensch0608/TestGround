import { useInfiniteQuery } from '@tanstack/react-query';
import React from 'react';

import InfiniteScroll from 'react-infinite-scroller';
import Species from './Species';

const initialUrl = 'https://swapi.dev/api/species/';
// pageParam으로 고정
const fetchUrl = async ({ pageParam = initialUrl }) => {
  const response = await fetch(pageParam);
  return response.json();
};
const InfiniteSpecies = () => {
  const { data, fetchNextPage, hasNextPage, status, error, isFetching } =
    useInfiniteQuery(['sw-species'], fetchUrl, {
      getNextPageParam: (lastPage) => lastPage.next || undefined,
    });

  return status === 'loading' ? (
    <div className="loading">Loading...</div>
  ) : status === 'error' ? (
    <div>Error! {error.toString()}</div>
  ) : (
    <>
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        {data.pages.map((page) =>
          page.results.map((result) => (
            <Species
              name={result.name}
              language={result.language}
              averageLifespan={result.average_lifespan}
            />
          ))
        )}
      </InfiniteScroll>
      {isFetching && <div className="loading">Loading...</div>}
    </>
  );
};

export default InfiniteSpecies;
