import test from 'ava';
import Api from './api';

let api: Api;

test.beforeEach(() => {
  api = new Api();
});

test('facade acceptance test', async (t) => {
  await api.analyze('example1');
  api.validate('core', 'numClasses', 4);
  t.pass();
});
