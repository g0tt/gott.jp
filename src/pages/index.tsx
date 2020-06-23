import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style.css';
import { TopImage } from '../components/TopImage';
import { Name } from '../components/Name';
import { ServiceLinks } from '../components/ServiceLinks';
import { Content } from '../components/Content';
import { ContentBlock } from '../components/ContentBlock';

ReactDOM.render(
  <div className="container target" style={{ maxWidth: '700px' }}>
    <TopImage />
    <Name />
    <ServiceLinks />

    <div className="content">
      <Content title="職歴">
        <ContentBlock
          title="株式会社pluszero"
          url="https://plus-zero.co.jp/"
          periodStart="'18"
        />
        <ContentBlock
          title="株式会社ミクシィ"
          url="https://mixi.co.jp/"
          periodStart="'19"
          periodEnd="'19"
        >
          2週間の夏季インターンに参加。
          <br />
          <a href="https://www.monst-dreamcompany.com/" target="_blank">
            モンストドリームカンパニー
          </a>{' '}
          管理画面作成（Rails）。
        </ContentBlock>
        <ContentBlock
          title="株式会社ユニプロ"
          url="https://unipro.co.jp/"
          periodStart="'16"
          periodEnd="'20"
        >
          受託Web・アプリ開発。
          <ul className="mt-0 mb-0" style={{ listStyle: 'square' }}>
            <li>業務用iPadカメラアプリ（PM / API / 管理画面）</li>
            <li>業界向けポータルサイト（テックリード）</li>
            <li>MVNOサービスサイト</li>
          </ul>
          など。
        </ContentBlock>
        <ContentBlock
          title="株式会社GNEX"
          url="https://globalnet-ex.com/"
          periodStart="'13"
          periodEnd="'16"
        >
          自社サービス・受託Web開発。
        </ContentBlock>
      </Content>

      <Content title="経験・技術">
        <ContentBlock title="TypeScript" level="4">
          サーバサイドは Fastify, Express, Knex など。
          <br />
          フロントは React, Angular, Nuxt, jQuery など。
        </ContentBlock>
        <ContentBlock title="PHP" level="3">
          　過去に決済・金融関係のロジックの実装経験あり。最近は使っていません。
          <br />
          フレームワークは Slim, Laravel。
        </ContentBlock>
        <ContentBlock title="インフラ" level="3">
          AWS EC2, ELB, Elastic Beanstalk, ECS, ECR, Lambda, Route53, S3 など。
          <br />
          オンプレミスは CentOS や Ubuntu にて Apache, nginx, BIND, Postfix,
          Dovecot, OpenVPN, L2TP/IPsec などを構築・運用。
        </ContentBlock>
        <ContentBlock title="データベース" level="2">
          MySQL, SQL Server の小〜中規模テーブル設計、データ投入など。
        </ContentBlock>
        <ContentBlock title="ネットワーク" level="2">
          ネットワークスペシャリスト（2018/12取得）。
          <br />
          実務経験なし。自宅固定IPで遊んでいます。
        </ContentBlock>
        <ContentBlock title="競技プログラミング" level="1">
          AtCoder緑→
          <a
            style={{ color: '#008000' }}
            href="https://atcoder.jp/users/gott"
            target="_blank"
          >
            gott
          </a>
          <br />
          C++を使用。
        </ContentBlock>
        <ContentBlock title="その他言語">
          C, Java, Scala, Haskell, Python, Rust, etc.
        </ContentBlock>
      </Content>
    </div>
  </div>,
  document.getElementById('app')
);
