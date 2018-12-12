'use strict';
const moment = require('moment');

module.exports = app => {
    const { STRING, INTEGER, BIGINT, DATE, TIME } = app.Sequelize;
    const ChartReport = app.model.define('chart_report', {
        report_id: {
            type: BIGINT(20),
            primaryKey: true,
            allowNull: false,
        },
        is_insight: {
            type: BIGINT(2),
            allowNull: true,
        },
        report_cn: {
            type: STRING(20),
            allowNull: true,
        },
        rpt_render: {
            type: STRING(20),
            allowNull: true,
        },
        sort: {
            type: BIGINT(10),
            allowNull: true,
        },
        status: {
            type: BIGINT(2),
            allowNull: true,
        },
        created: {
            type: DATE,
            get() {
                return moment(this.getDataValue('created')).format('YYYY-MM-DD');
            },
            validate: {
            }
        },
        updated: {
            type: DATE,
            get() {
                return moment(this.getDataValue('updated')).format('YYYY-MM-DD');
            },
            validate: {
            }
        },
    }, {
        timestamps: false,
        // 关闭默认表明加s
        freezeTableName: true,
    });
    return ChartReport;
};