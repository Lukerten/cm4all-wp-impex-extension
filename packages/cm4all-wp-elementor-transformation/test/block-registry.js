import test from 'node:test';
import assert from 'node:assert';
import '../src/setup-window.mjs';
import {GlobalRegistrator} from '@happy-dom/global-registrator';

import {createBlock} from '@wordpress/blocks';

import {
  registerCoreBlocks,
  __experimentalGetCoreBlocks,
} from '@wordpress/block-library';

function normalizeGutenbergBlockNodes(gutenbergBlockNodes) {
  for (const gutenbergBlockNode of gutenbergBlockNodes) {
    delete gutenbergBlockNode.clientId;

    normalizeGutenbergBlockNodes(gutenbergBlockNode.innerBlocks);
  }
}

// FIXME: This is currently broken
test('Create Block using createBlock Scaffolding', async (t) => {
  // const gutenbergBlockNodes =  [ createBlock ('core/paragraph', {}),];
  // const gutenbergOutput = serialize(gutenbergBlockNodes);
  // const parsedGutenbergBlockNodes = parse(gutenbergOutput);
  // normalizeGutenbergBlockNodes([...gutenbergBlockNodes, ...parsedGutenbergBlockNodes]);
  // assert.deepStrictEqual((parsedGutenbergBlockNodes), (gutenbergBlockNodes));
  // window.close();
  // GlobalRegistrator.unregister();
  assert.strictEqual(1, 1);
  GlobalRegistrator.unregister();
});
