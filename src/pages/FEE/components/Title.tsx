import React from 'react';

interface titleProps {
  text: string,
  classes?: string,
  img?: string,
}

export default (props: titleProps) => {
  const {
    text,
    classes,
    img,
  } = props;
  return <h3 className={`title-block ${classes}`}>{img ? <img src={img} alt="image in title" /> : ''}{text}</h3>
}