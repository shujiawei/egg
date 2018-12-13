'use strict';
 
const Controller = require('egg').Controller;
 
class UserController extends Controller {
    async index() {
        const _ctx = this.ctx
        const user = await _ctx.model.User.findAll();
        _ctx.body = user;
    }
}
 
module.exports = UserController;
