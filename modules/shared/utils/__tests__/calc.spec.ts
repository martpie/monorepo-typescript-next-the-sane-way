import * as Calc from '../calc';

describe('add', () => {
  it('should add two number properly', () => {
    expect(Calc.add(1, 1)).toBe(2);
  });
});

describe('substract', () => {
  it('should substract two number properly', () => {
    expect(Calc.substract(5, 2)).toBe(3);
  });
});
