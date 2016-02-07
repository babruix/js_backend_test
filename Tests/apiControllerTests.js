var should = require('should'),
    sinon = require('sinon');

describe('API Controller Tests:', function(){
    describe('GET', function(){
        it('should not allow get other than exising files', function(){
            var Directory = '';

            var req = {

            };

            var res = {
                status: sinon.spy(),
                send: sinon.spy()
            };

            var directoryController = require('../controllers/directoryController')(Directory);

            directoryController.get(req,res);

            res.status.calledWith(400).should.equal(true, 'Bad Status ' + res.status.args[0][0]);
            res.send.calledWith('File not found').should.equal(true);
        })
    })
})