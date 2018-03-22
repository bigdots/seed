const Koa = require("koa");
const Router = require("koa-router");
const swig = require("swig");
const path = require("path");

const app = new Koa();
let router = new Router();

app.context.render = (url, data = null, ctx) => {
    let template = swig.compileFile(path.resolve(__dirname, "src/view/", url));
    ctx.response.type = "text/html";
    ctx.response.body = template(data);
};

router.get("/", (ctx, next) => {
    ctx.response.type = "text/html";
    ctx.response.body = "<h1>Hello, seed!</h1>";
});

router.get("/add", (ctx, next) => {
    ctx.render(
        "add.html",
        {
            pagename: "awesome people",
            authors: ["Paul", "Jim", "Jane"]
        },
        ctx
    );
});

app.use(router.routes());

app.listen(3000);

console.log("======= seed started at port 3000 ========");
