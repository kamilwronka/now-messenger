import React from 'react';

import SocketContext from '../socketContext';

export default function withSocket(Component) {
  return props => (
    <SocketContext.Consumer>
      {socket => <Component {...props} socket={socket} />}
    </SocketContext.Consumer>
  );
}
