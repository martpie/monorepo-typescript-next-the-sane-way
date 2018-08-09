import * as React from 'react';
import * as Calc from 'shared/utils/calc';

export default () => (
  <>
    <div>Hello World</div>
    <div>5 + 3 = {Calc.add(5, 3)}</div>
  </>
);
