'use strict';

const Controller = require('egg').Controller;

class ReportController extends Controller {
    constructor(ctx) {
        super(ctx);
        this.ret = {code: -1, info: 'fail', data: null};
    }
    async reportConfig() {
        // const ret = {code: -1, info: 'fail', data: null}; 
        const data = await this.ctx.service.report.addChartReport();
        if (data) {
            this.ret['data'] = data.data;
            this.ret['code'] = 0;
            this.ret['info'] = 'success';
        }
        this.ctx.body = this.ret;
        this.ctx.status = 200;
    }
    async reportGetAll() {
        const data = await this.ctx.service.report.getAll();
        if (data) {
            this.ret['data'] = data.data;
            this.ret['code'] = 0;
            this.ret['info'] = 'success';
        }
        this.ctx.body = this.ret;
        this.ctx.status = 200;
    }
}
module.exports = ReportController;