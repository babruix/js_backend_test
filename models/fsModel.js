var readdir = require('fs-readdir-promise'),
  fs = require('fs'),
  path = require('path'),
  mime = require('mime');

var fsModel = {};


fsModel.readFiles = function (dirName, onComplete, onError) {
  readdir(dirName)
    .then(function(files) {
      onComplete(files);
    })
    .catch(function(err) {
      onError(err);
    });
};

fsModel.getFileInfo = function (fileName) {

  var stats = fs.statSync(fileName);
  return {
    Name: fileName,
    Size: stats['size'],
    Created: stats['ctime'],
    Modified: stats['mtime'],
    Extension: getExtension(fileName),
    Mime: mime.lookup(fileName)
};
};

function getExtension(filename) {
  var ext = path.extname(filename||'').split('.');
  return ext[ext.length - 1];
}

module.exports = fsModel;