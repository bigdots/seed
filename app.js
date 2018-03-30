const Koa = require("koa");
const Router = require("koa-router");
const swig = require("swig");
const path = require("path");
const https = require("https");
const static = require("koa-static");

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

router.get("/login", (ctx, next) => {
    ctx.render("login.html", {
        pagename: "awesome people",
        authors: ["Paul", "Jim", "Jane"]
    });
});

// todo 发起一个请求

// https
//     .get("https://github.com/bigdots/blog/blob/master/md/ES6%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3/let%26const.md", resp => {
//         let data = "";

//         // A chunk of data has been recieved.
//         resp.on("data", chunk => {
//             data += chunk;
//         });

//         // The whole response has been received. Print out the result.
//         resp.on("end", () => {
//             console.log(data);
//         });
//     })
//     .on("error", err => {
//         console.log("Error: " + err.message);
//     });

app.use(static(path.resolve(__dirname, "public")));

app.use(router.routes());

app.listen(8687);

console.log("======= seed started at port 3000 ========");
