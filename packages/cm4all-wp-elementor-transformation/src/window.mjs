import 'global-jsdom/register';
import 'polyfill-library/polyfills/__dist/matchMedia/raw.js';

global.CSS = {
  escape(ident) {
    return '';
  },
  supports(property, value) {
    return true;
  },
  supports(conditionText) {
    return true;
  },
};

// this breaks the code
import {
  registerCoreBlocks,
  __experimentalGetCoreBlocks,
} from '@wordpress/block-library';

const coreBlocks = __experimentalGetCoreBlocks();
registerCoreBlocks(coreBlocks);
