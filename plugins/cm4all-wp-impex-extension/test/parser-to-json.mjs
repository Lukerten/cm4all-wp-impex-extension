import test from 'node:test';
import assert from 'node:assert';

test('asttest', (e) => {
  // Structure of a Simple Site only containing a Header Block
  const source =
    '[{"id":"34a7cb1","elType":"section","settings":[],"elements":[{"id":"712bf1a","elType":"column","settings":{"_column_size":100,"_inline_size":null},"elements":[{"id":"d6630b2","elType":"widget","settings":{"title":"Hello World"},"elements":[],"widgetType":"heading"}],"isInner":false}],"isInner":false}]';

  const ast = JSON.parse(source);

  const target = JSON.stringify(ast);

  assert.equal(source, target);
});
