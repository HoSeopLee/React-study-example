import React, { memo, Profiler, useState, useMemo } from 'react';
import './CommentItem.css';
function CommentItem({ title, content, likes, onClick }) {
  const [clickCount, setClickCount] = useState(0);
  function onRenderCallback(
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions // the Set of interactions belonging to this update
  ) {
    console.log(`actualDuration ${title} : ${actualDuration}`);
    // Aggregate or log render timings...
  }
  //프롭스가 아닐때 이벤트 확인
  const handleClick = () => {
    onClick();
    setClickCount((pre) => pre + 1);
    alert(`${title}눌림`);
  };

  //클릭이벤트후 다시 그려지는지 확인
  const rate = () => {
    console.log('rate check', title);
    return likes > 10 ? 'Good' : 'Bed';
  };

  // const rate = useMemo(() => {
  //   console.log('rate check', title);
  //   return likes > 10 ? 'Good' : 'Bed';
  // }, [likes]);

  return (
    <Profiler id="CommentItem" onRender={onRenderCallback}>
      <div className="CommentItem" onClick={handleClick}>
        <span>{title}</span>
        <br />
        <span>{content}</span>
        <br />
        <span>{likes}</span>
        <span>{rate()}</span>
        {/* <span>{rate}</span> */}
        <br />
        <span>{clickCount}</span>
      </div>
    </Profiler>
  );
}
// export default memo(CommentItem);
export default CommentItem;
