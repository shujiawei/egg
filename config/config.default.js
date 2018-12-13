'use strict';

module.exports = appInfo => {
	const config = exports = {};
	config.security = {
        csrf: {
            // useSession: true, // 默认为 false，当设置为 true 时，将会把 csrf token 保存到 Session 中
            // queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
            // bodyName: '_csrf',
            // headerName: 'x-csrf-token',
            enable: false,
        },
    };
	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1544518349899_9228';

	// add your config here
	config.middleware = [];
    return config;
};
