const Koa = require("koa");
const Router = require('koa-router');

const app = new Koa();
let router = new Router();

router.get('/', (ctx, next)=>{
    ctx.response.type = "text/html";
    ctx.response.body = "<h1>Hello, seed!</h1>";
})

app.use(router.routes());

app.listen(3000);

console.log("======= seed start ========");
console.log("======= app started at port 3000 ========");
