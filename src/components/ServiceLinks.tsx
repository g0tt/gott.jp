import * as React from 'react';

export class ServiceLinks extends React.Component {
  render() {
    return (
      <div className="row mx-auto" style={{ width: '32px' }}>
        <a href="http://github.com/g0tt" target="_blank">
          <img
            src="GitHub-Mark-32px.png"
            srcSet="github.svg"
            width="32px"
            height="32px"
            style={{ margin: '0 auto' }}
            alt="github"
          />
        </a>
      </div>
    );
  }
}
