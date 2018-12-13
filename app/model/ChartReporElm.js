'use strict';
const moment = require('moment');

module.exports = app => {
    const { STRING, INTEGER, BIGINT, DATE, TIME } = app.Sequelize;
    const report = app.model.define('chert_report_elm', {
        id: {
            type: BIGINT(20),
            primaryKey: true,
            autoOmcreament: true,
            allowNull: false,
        },
        report_id: {
            type: STRING(20),
            allowNull: false,
        },
        elm_id: {
            type: STRING(20),
        },
        px: {
            type: STRING(20),
        },
        py: {
            type: STRING(20),
        },
        width: {
            type: STRING(20),
        },
        height: {
            type: STRING(20),
        },
        created: {
            type: DATE,
            get() {
                return moment(this.getDataValue('created')).format('YYYY-MM-DD HH:mm:ss');
            },
            allowNull: true,
        },
        updated: {
            type: DATE,
            get() {
                return moment(this.getDataValue('updated')).format('YYYY-MM-DD HH:mm:ss');
            },
            allowNull: true,
        },
        status: DATE,
    }, {
        timestamps: false,
        // 关闭默认表明加s
        freezeTableName: true,
    });
    return report;
};