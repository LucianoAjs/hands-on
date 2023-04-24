import { Fragment } from 'react';

export const GrandChildComponent = ({ color }) => {
  return (
    <Fragment>
      <div className={color}>The color is {color}</div>
    </Fragment>
  );
};
