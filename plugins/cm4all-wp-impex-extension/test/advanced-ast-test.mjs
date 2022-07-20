import test from 'node:test';
import assert from 'node:assert';

test('more complex AST', (e) => {
  const source =
    '[{"id":"4eed24e","elType":"section","settings":{"structure":"30"},"elements":[{"id":"425465b","elType":"column","settings":{"_column_size":33,"_inline_size":null},"elements":[{"id":"b39e23f","elType":"widget","settings":{"editor":"<p>hihi</p>"},"elements":[],"widgetType":"text-editor"}],"isInner":false},{"id":"8935fd0","elType":"column","settings":{"_column_size":33,"_inline_size":null},"elements":[{"id":"bc9e24b","elType":"widget","settings":{"editor":"<p>huhu</p>"},"elements":[],"widgetType":"text-editor"}],"isInner":false},{"id":"fe638a6","elType":"column","settings":{"_column_size":33,"_inline_size":null},"elements":[{"id":"c29448e","elType":"widget","settings":{"editor":"<p>hoho</p>"},"elements":[],"widgetType":"text-editor"}],"isInner":false}],"isInner":false}]';
  // source '[{"id":"4eed24e","elType":"section","settings":{"structure":"30"},"elements":[{"id":"425465b","elType":"column","settings":{"_column_size":33,"_inline_size":null},"elements":[{"id":"b39e23f","elType":"widget","settings":{"editor":"<p>hihi</p>"},"elements":[],"widgetType":"text-editor"}],"isInner":false},{"id":"8935fd0","elType":"column","settings":{"_column_size":33,"_inline_size":null},"elements":[{"id":"bc9e24b","elType":"widget","settings":{"editor":"<p>huhu</p>"},"elements":[],"widgetType":"text-editor"}],"isInner":false},{"id":"fe638a6","elType":"column","settings":{"_column_size":33,"_inline_size":null},"elements":[{"id":"c29448e","elType":"widget","settings":{"editor":"<p>hoho</p>"},"elements":[],"widgetType":"text-editor"}],"isInner":false}],"isInner":false}]'
  // target '[{"id":"4eed24e","elType":"section","settings":{"structure":"30"},"elements":[{"id":"425465b","elType":"column","settings":{"_column_size":33,"_inline_size":null},"elements":[{"id":"b39e23f","elType":"widget","settings":{"editor":"<p>hihi</p>"},"elements":[],"widgetType":"text-editor"}],"isInner":false},{"id":"8935fd0","elType":"column","settings":{"_column_size":33,"_inline_size":null},"elements":[{"id":"bc9e24b","elType":"widget","settings":{"editor":"<p>huhu</p>"},"elements":[],"widgetType":"text-editor"}],"isInner":false},{"id":"fe638a6","elType":"column","settings":{"_column_size":33,"_inline_size":null},"elements":[{"id":"c29448e","elType":"widget","settings":{"editor":"<p>hoho</p>"},"elements":[],"widgetType":"text-editor"}],"isInner":false}],"isInner":false}]'

  const ast = JSON.parse(source);
  const target = JSON.stringify(ast);

  assert.equal(source, target);
});
