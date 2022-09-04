import React from 'react';
import TodoList from './TodoList';
import CurrentUserInfo from './users/CurrentUserInfo';
import { ColorRing } from 'react-loader-spinner';
import ErrorBoundary from './layouts/ErrorBoundary';
import UserInfo from './users/UserInfo';

const App = () => {
  return (
    <>
      {/* <TodoList /> */}

      <React.Suspense
        fallback={
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        }
      >
        {/* <CurrentUserInfo /> */}
        <UserInfo userId={1} />
        <UserInfo userId={2} />
        <UserInfo userId={3} />
      </React.Suspense>
    </>
  );
};

export default App;
