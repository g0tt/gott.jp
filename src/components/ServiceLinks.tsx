import * as React from 'react';
import { ServiceLink } from './ServiceLink';

export class ServiceLinks extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col text-center">
          <ServiceLink
            imageSrc="github.svg"
            alt="github"
            href="https://github.com/g0tt"
          />
          <ServiceLink
            imageSrc="blog.svg"
            alt="blog"
            href="https://b.gott.jp/"
          />
        </div>
      </div>
    );
  }
}
