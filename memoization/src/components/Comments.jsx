import React, { useCallback } from 'react';
import CommentItem from './CommentItem';

export default function Comments({ commentsList }) {
  //렌더링 확인
  // const handleChange = () => {
  //   console.log('눌림');
  // };
  //콜백사용후
  const handleChange = useCallback(() => {
    console.log('눌림');
  }, []);
  return (
    <div>
      {commentsList.map((comment, index) => (
        <CommentItem
          key={index}
          title={comment.title}
          content={comment.content}
          likes={comment.likes}
          onClick={handleChange}
        />
      ))}
    </div>
  );
}
