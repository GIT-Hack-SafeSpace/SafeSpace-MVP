import React from 'react';

import styled from 'styled-components';

const TagStyles = styled.div`
display:flex;
justify-content: flex-end;

.tag{
  margin: 0 5px;
  border-radius: 10px;
  padding: 2px 15px;
  color: white;
  font-size: 12px;
}

.tag:last-child{
  margin: 0;
}`

export default function Tags({data}) {
  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const tagDetailRandomizer = (tagType) => {
    const shuffledArray = tagType.sort((a, b) => 0.5 - Math.random());
    const selected = () => shuffledArray.slice(0, randomNumber(1, 3));
    return selected();
  
  }

  const tagMaker = (tagType) => {
    let tagData = tagDetailRandomizer(tagType);
    return tagData;
  }

  return (
    <TagStyles>
      {tagMaker(data).map((i) => <div className="tag" key={i.id} style={{ backgroundColor: `${i.tagColor}` }}>{i.tagName}</div>)}
    </TagStyles>
  )
}
