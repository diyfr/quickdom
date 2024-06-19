import { QuickDom, qd } from '../src/index';

test('should create a div element with class and id', () => {
  const div = QuickDom.new('div', { className: 'container', id: 'testDiv' });
  expect(div.tagName).toBe('DIV');
  expect(div.className).toBe('container');
  expect(div.id).toBe('testDiv');
});

test('should create a button element with custom attributes', () => {
  const button = qd('button', { type: 'button', 'data-state': 'active' });
  expect(button.tagName).toBe('BUTTON');
  expect(button.getAttribute('type')).toBe('button');
  expect(button.getAttribute('data-state')).toBe('active');
});
