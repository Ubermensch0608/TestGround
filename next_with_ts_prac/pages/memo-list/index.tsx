import { Fragment } from 'react';
import { memo } from 'react';

import { GetStaticProps, NextPage } from 'next';
import axios from 'axios';

import MemoList from 'components/MemoList';
import { setMemo } from 'models/new-memo';

const MemoListPage: NextPage<{ memoList: PlaceHolder[] }> = ({ memoList }) => {
  const newMemoList = memoList.map((item) => {
    const userName = item.userId;
    const title = item.title;
    const body = item.body;
    return new setMemo(userName, title, body);
  });

  return (
    <Fragment>
      <MemoList memoList={newMemoList} />
    </Fragment>
  );
};

export interface PlaceHolder {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Energy {
  itemName: string;
  id: number;
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get<PlaceHolder[]>(
    'https://jsonplaceholder.typicode.com/posts',
  );
  const data = response.data;

  return {
    props: {
      memoList: data,
    },
  };
};

export default memo(MemoListPage);
