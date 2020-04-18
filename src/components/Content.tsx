import * as React from 'react';

interface Props {
  title: string;
  children?: React.ReactNode;
}

export class Content extends React.Component<Props, {}> {
  render() {
    return (
      <>
        <div className="row" style={{ marginTop: '15px' }}>
          <div style={{ marginLeft: '20px' }}>
            <h2>{this.props.title}</h2>
          </div>
        </div>
        {this.props.children}
      </>
    );
  }
}
