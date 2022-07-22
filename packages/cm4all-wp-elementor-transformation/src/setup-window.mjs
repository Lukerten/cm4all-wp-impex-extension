import './setup-happy-dom.js';
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

// FIXME: Currently tests can not finish while @wordpress/blocks is imported
// import {createBlock} from '@wordpress/blocks';
// import {registerCoreBlocks,__experimentalGetCoreBlocks,} from '@wordpress/block-library';
// const coreBlocks = __experimentalGetCoreBlocks();
// registerCoreBlocks(coreBlocks);
