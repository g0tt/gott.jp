import * as React from 'react';

interface Props {
  children?: React.ReactNode;
}

export class TopImage extends React.Component {
  render() {
    return (
      <div style={{ marginTop: '5%', textAlign: 'center' }}>
        <img id="topimg" src="top.webp" alt="" />
      </div>
    );
  }
}
