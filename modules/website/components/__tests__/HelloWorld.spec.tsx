import {
  render,
  cleanup
} from 'react-testing-library';
import * as React from 'react';

import HelloWorld from '../HelloWorld';

afterEach(cleanup);

describe('Hello World', () => {
  it('should say hello', () => {
    const { container } = render(<HelloWorld />);
    expect(container.textContent).toBe('Hello World');
  });
});
