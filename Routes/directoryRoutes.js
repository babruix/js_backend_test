var express = require('express');

var routes = function (Directory) {
  var directoryRouter = express.Router();
  var directoryController = require('../Controllers/directoryController')(Directory);

  directoryRouter.route('/')
    .get(directoryController.getFileList);

  directoryRouter.route('/fileInfo/:fileName')
    .get(directoryController.getFileInfo);

  directoryRouter.route('/getPath')
    .get(directoryController.getDirInfo);



  return directoryRouter;
};

module.exports = routes;