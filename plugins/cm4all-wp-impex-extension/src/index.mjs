const handlers = {
  section(elementorASTNode, options) {
    const gutenbergASTNode = {type: 'core/paragraph', attributes: {}};

    gutenbergASTNode.innerBlocks = _transform(
      elementorASTNode.elements,
      options
    );

    return [gutenbergASTNode];
  },

  column(elementorASTNode, options) {
    const gutenbergASTNode = {type: 'core/columns', attributes: {}};

    gutenbergASTNode.innerBlocks = _transform(
      elementorASTNode.elements,
      options
    );

    return [gutenbergASTNode];
  },
};

const onUnknownElementorNodeType = (elementorAST) => [];

export default function transform(elementorAST, options = {}) {
  options.onUnknownElementorNodeType ||= onUnknownElementorNodeType;

  return _transform(elementorAST, options);
}

function _transform(elementorAST, options) {
  const gutenbergAST = [];

  for (const elementorASTNode of elementorAST) {
    gutenbergAST.push(
      ...(
        handlers[elementorASTNode.elType] || options.onUnknownElementorNodeType
      )(elementorASTNode, options)
    );
  }

  return gutenbergAST;
}
