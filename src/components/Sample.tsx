import React from 'react';

type Props = {
  isOpen: boolean;
};

export const Sample = ({ isOpen }: Props) => {
  return <div>Sample {isOpen}</div>;
};
