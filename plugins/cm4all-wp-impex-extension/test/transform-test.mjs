import test from 'node:test';
import assert from 'node:assert';
import transform from '../src/index.mjs';

test('empty transform', (t) => {
  const source = [];

  assert.deepEqual(transform(source), source);
});
