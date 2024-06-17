import { QuickDom } from '../src/quickdom';

test('create div with class', () => {
  const div = QuickDom.new('div', { className: 'test-class' });
  expect(div.tagName).toBe('DIV');
  expect(div.className).toBe('test-class');
});