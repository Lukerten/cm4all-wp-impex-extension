import test from 'node:test';
import assert from 'node:assert';
import '../src/window.mjs';

function normalizeGutenbergBlockNodes(gutenbergBlockNodes) {
  for (const gutenbergBlockNode of gutenbergBlockNodes) {
    delete gutenbergBlockNode.clientId;

    normalizeGutenbergBlockNodes(gutenbergBlockNode.innerBlocks);
  }
}

test('gutenberg ast function example usage', (t) => {
  // const gutenbergBlockNodes = [
  //   createBlock('core/paragraph', {content: 'hello world'}),
  // ];
  // const gutenbergOutput = serialize(gutenbergBlockNodes);
  // const parsedGutenbergBlockNodes = parse(gutenbergOutput);
  // normalizeGutenbergBlockNodes([...gutenbergBlockNodes, ...parsedGutenbergBlockNodes]);
  // assert.deepStrictEqual((parsedGutenbergBlockNodes), (gutenbergBlockNodes));
  // window.close();
});
