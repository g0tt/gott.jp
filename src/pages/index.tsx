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
          夏季インターン
        </ContentBlock>
        <ContentBlock
          title="株式会社ユニプロ"
          url="https://unipro.co.jp/"
          periodStart="'16"
        >
          受託Webエンジニア。
          <br />
          TeXファイル検索システム改修，外貨両替機API・管理画面新規開発，MVNOサービスCRM機能追加，業界向けポータルサイト新規開発テックリードなど。
        </ContentBlock>
        <ContentBlock
          title="株式会社GNEX"
          url="https://globalnet-ex.com/"
          periodStart="'13"
          periodEnd="'16"
        >
          自社サービス・受託Webエンジニア。
        </ContentBlock>
      </Content>

      <Content title="経験・技術">
        <ContentBlock title="PHP" level="4">
          特にセキュリティ上のリスクの高い決済・金融関係のロジックの実装経験あり。フレームワークはSlim，Laravel。
        </ContentBlock>
        <ContentBlock title="JavaScript" level="3">
          フロントは生JavaScript，jQuery，React，Angular，Vue。
          サーバサイドは経験が浅いが，ExpressやFastifyの経験あり。
        </ContentBlock>
        <ContentBlock title="データベース" level="2">
          MySQL，SQL
          Serverの小規模なテーブル設計や，簡単な生クエリを書くことはできる。
        </ContentBlock>
        <ContentBlock title="インフラ" level="3">
          AWS EC2，ELB，Elastic
          Beanstalk，ECS，ECR，Lambda，Route53，S3サーバーレスなどの経験あり。
          <br />
          オンプレミスは，CentOSやUbuntuにてApache，nginx，BIND，Postfix，Dovecot，OpenVPN，L2TP/IPsecなどを構築。
        </ContentBlock>
        <ContentBlock title="ネットワーク" level="2">
          ネットワークスペシャリスト(2018/12)
          <br />
          実務経験なし。
        </ContentBlock>
        <ContentBlock title="競技プログラミング" level="2">
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
          C，Java，Scala，Haskell，Python
        </ContentBlock>
      </Content>
    </div>
  </div>,
  document.getElementById('app')
);
