const Controller = require('egg').Controller;
class getMarkDown extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = getMarkDown;
