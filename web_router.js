/**
 * Created by wuxin on 16/4/9.
 */
var express = require('express');
var site = require('./controllers/site');
var apis = require('./controllers/apis');
var items = require('./controllers/items');
var params = require('./controllers/params');
var history = require('./controllers/history');
var sign = require('./controllers/sign');

var router = express.Router();

var routeConf = {
    '/' : {
        'get' : site.index
    },

    '/home' : {
        'get' : site.home,
        '/:name' : {
            get : site.page
        }
    },
    //接口管理
    '/apis' : {
        'get' : apis.index,
        '/list' : {
            'get' : apis.list
        },
        '/add' : {
            'post' : apis.add
        },
        '/del' : {
            '/:id' : {
                'get': apis.del
            }
        },
        '/edit' : {
            'get' : apis.edit
        },
        '/info' : {
            'get' : apis.info
        }
    },
    '/send' : {
        'post' : apis.send
    },
    //接口组即项目管理
    '/items' : {
        '/list' : {
            'get' : items.list
        },
        '/add' : {
            'post' : items.add
        },
        '/del' : {
            'get' : items.del
        },
        '/edit' : {
            'post' : items.edit
        }
    },
    //参数管理
    '/params' : {
        '/list' : {
            'get' : params.list
        },
        '/add' : {
            'post' : params.add
        },
        '/del' : {
            'get' : params.del
        },
        '/edit' : {
            'get' : params.edit
        }
    },
    //参数管理
    '/history' : {
        '/list' : {
            'get' : history.list
        },
        '/add' : {
            'post' : history.add
        },
        '/del' : {
            'get' : history.del
        },
        '/edit' : {
            'get' : history.edit
        }
    },
    //登录管理
    '/signin' : {
        'post' : sign.signin
    },
    '/signup' : {
        'post' : sign.signup
    },
    '/signout' : {
        'get' : sign.signout
    }
}

router.map = function(routeConf, route){
    route = route || '';
    for (var k in routeConf){
        switch (typeof routeConf[k]) {
            case 'object':
                router.map(routeConf[k], route+k);
                break;
            case 'function':
                //console.log(route+'==>'+routeConf[k])
                router[k](route, routeConf[k]);
                break;
        }
    }
}

router.map(routeConf);


// home page
//router.get('/', site.index);
//router.get('/home', site.home);

module.exports = router;