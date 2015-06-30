var uuid = require('node-uuid');
var LZString = require('lz-string');

var id = uuid.v4();
var key = LZString.compressToBase64(id);

console.log(key)
