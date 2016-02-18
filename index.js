var compiler = require('riot-compiler')

exports.handlers = {
  beforeParse: function (e) {
    if (e.filename.match(/\.tag$/)) {
      e.source = compiler.compile(e.source)
    }
  }
}
