import './App.css';
import React, { useState, useEffect } from 'react';
import Comments from './components/Comments';
const comments = [
  { title: 'comments1', content: 'message1', likes: 1 },
  { title: 'comments2', content: 'message2', likes: 1 },
  { title: 'comments3', content: 'message3', likes: 1 },
  { title: 'comments4', content: 'message4', likes: 1 },
];

function App() {
  const [commentsList, setCommentsList] = useState(comments);
  useEffect(() => {
    const interval = setInterval(() => {
      setCommentsList((pre) => [
        ...pre,
        {
          title: `comments${pre.length + 1}`,
          content: `message${pre.length + 1}`,
          likes: 1,
        },
      ]);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      <Comments commentsList={commentsList} />
    </div>
  );
}

export default App;
