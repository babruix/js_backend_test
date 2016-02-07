var fsModel = require('../models/fsModel');

var directoryController = function (Directory) {

  var getFileList = function (req, res) {

    fsModel.readFiles(Directory, function (files) {

      res.json(files);

    }, function (e) {
      console.log(e);
    });
  };


  var getFileInfo = function (req, res) {

    var params = req.params;
    var reternInfo = fsModel.getFileInfo(params.fileName);

    res.json(reternInfo);
  };


  var getDirInfo = function (req, res) {
    res.json(Directory);
  };


  return {
    getFileList: getFileList,
    getFileInfo: getFileInfo,
    getDirInfo: getDirInfo
  }
};

module.exports = directoryController;