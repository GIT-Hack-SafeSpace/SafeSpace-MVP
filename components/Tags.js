import React from 'react';
import styled from 'styled-components';

const TagStyles = styled.div`
  display: flex;
  justify-content: flex-end;

  .tag {
    margin: 0 5px;
    border-radius: 10px;
    padding: 2px 15px;
    color: white;
    font-size: 12px;
  }

  .tag:last-child {
    margin: 0;
  }
`;

export default function Tags({ tags, data }) {
  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const tagArray = tags.map((tag) => {
    return data.find((d) => d.tagName === tag);
  });

  return (
    <TagStyles>
      {[...new Set(tagArray)].map((tag, i) => (
        <div
          className='tag'
          key={i + randomNumber(1, 99)}
          style={{ backgroundColor: `${tag?.tagColor}` }}
        >
          {tag?.tagName}
        </div>
      ))}
    </TagStyles>
  );
}
