import React from 'react';
import { useQuery } from 'react-query';

const fetchComments = async (postId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  return res.json();
};

const PostDetail = ({ post }) => {
  const { data, isError, isLoading } = useQuery(['comments', post.id], () =>
    fetchComments(post.id)
  );

  if (isLoading) return <h3>Loading...</h3>;
  if (isError) return <h3>Error occured</h3>;
  console.log(data);
  return (
    <div>
      <h1>{post.title}</h1>
      <div>{post.body}</div>

      <ul>
        {data.map((comment) => (
          <li key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetail;
