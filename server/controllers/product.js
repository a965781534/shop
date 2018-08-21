const DB = require('../utils/db.js')

module.exports = {
  list: async ctx => {
    ctx.state.data = await DB.query("SELECT * FROM product;")
  },
  detail: async ctx => {
    var productId = + ctx.params.id
    var product

    if (!isNaN(productId)){
      product = (await DB.query("SELECT * FROM product where product.id=?", [productId]))[0]
    } else {
      product = {}
    }
    ctx.state.data = product
  }
}