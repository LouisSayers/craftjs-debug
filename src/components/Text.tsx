import { useNode } from '@craftjs/core';
import React from 'react';

export const Text = ({ text, ...props }: any) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div {...props} ref={(ref) => connect(drag(ref!))}>
      <p>{text}</p>
    </div>
  );
};
