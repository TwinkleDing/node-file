const router = require('koa-router')();
const fs = require('./utils');

router.get('/', (ctx, next) => {
  ctx.body = 'Hello World';
})
.get('/list', (ctx, next) => {
  fs.getDir('file').then(res => {
    ctx.body =  res
  })
})
.get('/info', (ctx, next) => {
  
})

module.exports = router;