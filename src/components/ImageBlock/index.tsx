import React from 'react';
import defaultImage from 'assets/images/default.jpg';

export type ImageInfo = {
  src: string,
  alt: string,
  position: { xaxis: string, yaxis: string },
  illustration?: string,
};

interface ImagBlockProps {
  data: ImageInfo,
}

export const defaultProps = {
  data: {
    src: defaultImage,
    alt: 'cannot find your image',
    position: { xaxis: 'center', yaxis: 'middle' },
    illustration: '',
  }
};

export default (props: ImagBlockProps = defaultProps) => {
  const { data } = props;
  const {
    src,
    alt,
    illustration,
    position,
  } = data;

  const {
    xaxis,
    yaxis,
  } = position;

  return (
    <div className={`img-block ${xaxis}-${yaxis}`}>
      <img src={src} alt={alt} />
      {
        illustration !== ''
          ? <p>{illustration}</p>
          : ''
      }
    </div>
  );
}