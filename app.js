const Koa = require("koa");

const app = new Koa();

app.use(async (ctx, next) => {
    await next();
    ctx.response.type = "text/html";
    ctx.response.body = "<h1>Hello, koa2!</h1>";
});

app.on("error", err => {
    log.error("server error", err);
});

app.listen(6666);
console.log("======= seed start ========");
console.log("======= app started at port 6666 ========");
