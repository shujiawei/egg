'use strict';

const Service = require('egg').Service;

class commonService extends Service{
    constructor(ctx) {
        super(ctx);
    }
    async addChartReport() {
        const result =  await this.ctx.model.ChartReoprtElm.creat({
            report_id: 'report_id',
            elm_id: 'elm_id'
        });
        return result;
    }
}