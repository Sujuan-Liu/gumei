import React from 'react';

interface absProps {
  text: string,
}

export default (props: absProps) => {
  const {
    text,
  } = props;
  return <div className="abstract-block">{text}</div>
}