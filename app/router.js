'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
const baseUrl = '/dmc/api'
module.exports = app => {
	const { router, controller } = app;
	router.get('/', controller.home.index);
	// 报表
	router.get('/dmc/api/report/config', controller.dmc.report.reportConfig);
	router.get('/user', controller.user.index);
};
