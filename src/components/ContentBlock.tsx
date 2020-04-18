import * as React from 'react';

interface Props {
  title: string;
  url?: string;
  periodStart?: string;
  periodEnd?: string;
  level?: '1' | '2' | '3' | '4' | '5';
  children?: React.ReactNode;
}

export class ContentBlock extends React.Component<Props, {}> {
  render() {
    return (
      <>
        <div className="row">
          <dl style={{ marginLeft: '30px' }}>
            <dt>
              {(() => {
                if (this.props.url) {
                  return (
                    <a href={this.props.url} target="_blank">
                      {this.props.title}
                    </a>
                  );
                }
                return <>{this.props.title}</>;
              })()}
            </dt>
            <dd>
              {(() => {
                if (this.props.periodStart || this.props.periodEnd) {
                  return (
                    <>
                      <span className="period">
                        {this.props.periodStart}-{this.props.periodEnd}
                      </span>
                      <br />
                    </>
                  );
                }
              })()}
              {(() => {
                if (this.props.level) {
                  const level = parseInt(this.props.level, 10);
                  const starsArray = Array(level)
                    .fill('★')
                    .concat(Array(5 - level).fill('☆'));
                  return (
                    <>
                      <span className="stars">{starsArray}</span>
                      <br />
                    </>
                  );
                }
              })()}
              {this.props.children}
            </dd>
          </dl>
        </div>
      </>
    );
  }
}
