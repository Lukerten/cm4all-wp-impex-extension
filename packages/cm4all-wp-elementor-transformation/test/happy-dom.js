import test from 'node:test';
import assert from 'node:assert';
import {GlobalRegistrator} from '@happy-dom/global-registrator';

test("Happy - Dom", (e) => {

  GlobalRegistrator.register();
  document.body.innerHTML = `<button>My button</button>`;
  const button = document.querySelector('button');
  assert.deepEqual(button.innerText, 'My button');
  GlobalRegistrator.unregister
});
