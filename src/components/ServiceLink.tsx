import * as React from 'react';

interface Props {
  imageSrc: string;
  alt: string;
  href: string;
}

export class ServiceLink extends React.Component<Props, {}> {
  render() {
    return (
      <a href={this.props.href} target="_blank" className="mr-2">
        <img
          srcSet={this.props.imageSrc}
          width="32px"
          height="32px"
          style={{ margin: '0 auto' }}
          alt={this.props.alt}
        />
      </a>
    );
  }
}
