'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
const baseUrl = '/dmc/api'
module.exports = app => {
	const { router, controller } = app;
	router.get('/', controller.home.index);
	// 报表(删除、编辑)
	router.post('chart_report', '/dmc/api/report/config/:reportId', controller.dmc.report.reportConfig);
	// 报表(新增)
	router.post('chart_report', '/dmc/api/report/config', controller.dmc.report.reportConfig);
	// 报表列表
	router.post('chart_report', '/dmc/api/report/all', controller.dmc.report.reportGetAll);
	router.get('/user', controller.user.index);
	// 测试上传
	router.post('test_upload', '/upload', controller.dmc.upload.upload);
};
