'use strict';

const Service = require('egg').Service;

class ReportService extends Service{
    constructor(ctx) {
        super(ctx);
    }
    async addChartReport() {
        return await this.getFormDb();
    }
    async getFormDb() {
        const ctx = this.ctx;
        let data = null;
        switch (ctx.request.body['option']){
            case 'insert':
                data = await this.insertDb();
                break;
            case 'update':
                data = await this.updateDb();
                break;
            default:
                data = await this.selectDb();
                break;
        }
        return data;
    }
    async insertDb() { //insert DB
        const ctx = this.ctx;
        // format params
        let data = null;
        await ctx.model.ChartReport.create(ctx.request.body.data).then(res => {
            data =  { data: res.dataValues, info: 'success',  code: 0 };
        });
        return data;
    }
    async updateDb() { //update
        const ctx = this.ctx;
        let data = null;
        const isExitReport = await ctx.model.ChartReport.findById(ctx.params.reportId);
        if (isExitReport) {
            await isExitReport.update(ctx.request.body.data).then(res => {
                data =  { data: res.dataValues, info: '修改成功',  code: 0 };
            });
        } else {
            data =  { data: '报表不存在', info: 'success',  code: -1 };
        }
        return data;
    }
    async selectDb() {
        const ctx = this.ctx;
        let data = null;
        const isExitReport = await ctx.model.ChartReport.findById(ctx.params.reportId);
        if (isExitReport) {
            data = {code: 0, info: 'success', data: isExitReport};
        } else {
            data =  { data: '报表不存在', info: 'success',  code: -1 };
        }
        return data;
    }
    async getAll() { //get List
        const ctx = this.ctx;
        const data =  { data: null, info: '修改成功',  code: 0 };
        data['data'] = await ctx.model.ChartReport.findAll({where: {status: 1}});
        if (!data['data']) {
            data['info'] = '获取失败';
            data['code'] = '-1';
        }
        return data;
    }
}
module.exports = ReportService;