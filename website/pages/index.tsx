import React from 'react';
import * as Calc from '../../shared/utils/calc';

export default () => {
  return (
    <>
      <div>Hello World</div>
      <div>5 + 3 = {Calc.add(5, 3)}</div>
    </>
  );
};
