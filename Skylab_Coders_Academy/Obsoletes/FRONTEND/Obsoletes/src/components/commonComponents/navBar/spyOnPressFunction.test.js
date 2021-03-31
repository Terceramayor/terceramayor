import spyOnPressFunction from './spyOnPressFunction';

describe('Given the spyOnPressFunction', () => {
  describe('When it is invoked', () => {
    test('Then the return value is null', () => {
      const result = spyOnPressFunction();

      expect(result).toBe(null);
    });
  });
});
