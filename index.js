var transform = require('coffee-react-transform');
var loaderUtils = require('loader-utils');
module.exports = function(cjsx) {
  this.cacheable && this.cacheable();
  return transform(cjsx, loaderUtils.parseQuery(this.query));
};
