import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => (
  <div className="loader">
    Loading ...
  </div>
);

function MyLoadable(opts) {
  return Loadable(
    Object.assign(
      {
        loading: Loading,
        delay: 200,
        timeout: 10000
      },
      opts
    )
  );
}

export default MyLoadable;
