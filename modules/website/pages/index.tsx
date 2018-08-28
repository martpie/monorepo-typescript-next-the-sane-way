import * as React from 'react';
import * as Calc from 'shared/utils/calc';

import HelloWorld from '../components/HelloWorld';

export default () => {
  return (
    <>
      <HelloWorld />
      <div>5 + 3 = {Calc.add(5, 3)}</div>
    </>
  );
};
