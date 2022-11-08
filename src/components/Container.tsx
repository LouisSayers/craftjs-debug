import { useNode } from '@craftjs/core';
import React from 'react';

export const Container = ({ children, ...props }: any) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  const styles = {
    background: '#eeeeee',
    padding: `5px`,
  };

  return (
    <div {...props} ref={(ref) => connect(drag(ref!))} style={styles}>
      {children}
    </div>
  );
};
