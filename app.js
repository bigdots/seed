const Koa = require("koa");
const Router = require("koa-router");
const swig = require("swig");
const path = require("path");

const app = new Koa();
let router = new Router();

app.context.render = function(url, data = null) {
    let template = swig.compileFile(path.resolve(__dirname, "src/view/", url));
    this.response.type = "text/html";
    this.response.body = template(data);
};

router.get("/", (ctx, next) => {
    ctx.response.type = "text/html";
    ctx.response.body = "<h1>Hello, seed!</h1>";
});

router.get("/add", (ctx, next) => {
    ctx.render("add.html", {
        pagename: "awesome people",
        authors: ["Paul", "Jim", "Jane"]
    });
});

// todo 发起一个请求

// router.post("/get/post/from/github", (ctx, next) => {
//     // ctx.render("add.html", {
//     //     pagename: "awesome people",
//     //     authors: ["Paul", "Jim", "Jane"]
//     // });
//     ctx.request.url= '/bigdots/blog/blob/master/md/ES6%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3/let%26const.md';
//     ctx.request.method = 'get';
// });

app.use(router.routes());

app.listen(3000);

console.log("======= seed started at port 3000 ========");
