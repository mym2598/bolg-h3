'use strict';

const Controller = require('egg').Controller;
const Type = require('../module/type')
class getList extends Controller {
  async index() {
    const { ctx } = this;
    let results = await Type.find({},(err,data)=>{
      if (err) return
      return data
    })
    ctx.body={
      data:results,
      status:200
    }
  }

}

module.exports = getList;
