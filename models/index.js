/**
 * Created by wuxin on 16/4/27.
 */
var mongoose = require('mongoose');
var config = require('../config.js');
var logger = require('../common/logger.js')

mongoose.connect(
    config.db,
    {
        server : {poolSize : 20}
    },
    function(err){
        if(err) {
            logger.error('connect to %s error: ', config.db, err);
            process.exit(1);
        }
    }
)

require('./items.js');
require('./apis.js');
require('./params.js');

exports.Items = mongoose.model('Items');
exports.Apis = mongoose.model('Apis');
exports.Params = mongoose.model('Params');