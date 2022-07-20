import test from 'node:test';
import assert from 'node:assert';
import transform from '../src/index.mjs';

test('transform option "onUnknownElementorNodeType"', (t) => {
  const source = [
    {
      elType: 'gibtsnicht',
      settings: [],
      elements: [],
    },
  ];
  const unknownElementorNodeTypes = [];

  assert.deepEqual(
    transform(source, {
      onUnknownElementorNodeType(elementorASTNode) {
        unknownElementorNodeTypes.push(elementorASTNode);
        return [];
      },
    }),
    []
  );

  assert.deepEqual(unknownElementorNodeTypes, source);
});

/*  TODO: WHY does this not work?

    const newUnknownElementorNodeType = (elementorASTNode) => {
    unknownElementorNodeTypes.push(elementorASTNode);
    return [];
  };

  assert.deepEqual(transform(source, newUnknownElementorNodeType()), []);
  assert.deepEqual(unknownElementorNodeTypes, source);
 */
