import React, { memo } from 'react';

const Header = () => (
  <header>
    <h1>
      January<div className="h1_sub">Activity</div>
    </h1>
  </header>
);

export default memo(Header);
