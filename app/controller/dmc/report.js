'use strict';

const Controller = require('egg').Controller;

class ReportController extends Controller {
    async reportConfig() {
        const _ctx = this.ctx
        const user = await _ctx.model.ChartReport.findAll();
        _ctx.body = user;
    }
}
module.exports = ReportController;