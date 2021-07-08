import React from 'react';

interface pProps {
  text: string,
}

export default (props: pProps) => {
  const { text } = props;
  return (
    <p className="article-p">
      {text}
    </p>
  );
}