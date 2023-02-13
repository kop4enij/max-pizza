import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="140" cy="120" r="120" />
    <rect x="0" y="268" rx="10" ry="10" width="280" height="24" />
    <rect x="0" y="311" rx="10" ry="10" width="280" height="88" />
    <rect x="11" y="412" rx="10" ry="10" width="130" height="30" />
    <rect x="154" y="410" rx="15" ry="20" width="120" height="40" />
  </ContentLoader>
);

export default Skeleton;
