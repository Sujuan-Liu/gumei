import React from 'react';

import P from './components/P';
import Title from './components/Title';
import Abstract from './components/Abstract';
import ImageBlock, {ImageInfo, defaultProps} from 'components/ImageBlock';

type contentRow = {
  type: string,
  content: '',
  img?: ImageInfo,
}

interface ArticleProps {
  title: string,
  abstract: string,
  content: [contentRow],
};

export default (props: ArticleProps) => {
  const {
    title,
    abstract,
    content,
  } = props;
  return (
    <div className="article-block">
      <Title text={title} />
      <Abstract text={abstract} />
      {
        content && content.map(row => {
          switch(row.type) {
            case 'p': 
              return <P text={row.content}/>
            case 'img':
              return <ImageBlock data={row.img || defaultProps.data} />
            default:
          }
        })
      }
    </div>
  );
}