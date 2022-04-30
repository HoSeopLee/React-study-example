import React, { useState } from 'react';

const Item = ({ name, age }) => {
  return (
    <li>
      name: {name} / age: {age}
    </li>
  );
};

const url =
  'https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json';

export default function TestMocking() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json.data);
      })
      .catch((err) => {
        setError(`Error :${err}`);
      });
  };
  const handleClick2 = () => {
    fetch('/login', {
      method: 'POST',
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        return response;
      });
  };
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <button onClick={handleClick}>데이터 가져오기</button>
      <button onClick={handleClick2}>데이터 가져오기2</button>
      {data && (
        <ul>
          {data.people.map((element) => (
            <Item
              key={`${element.name}-${element.age}`}
              name={element.name}
              age={element.age}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
