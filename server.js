const Koa = require("koa")
const bodyparser = require("koa-bodyparser")
const logger = require("koa-logger")
const Router = require("koa-router")
const static = require("koa-static")

const app = new Koa()
const router = new Router()

app.use(bodyparser())
app.use(logger())
app.use(static("dist"))
app.use(router.routes())
app.use(router.allowedMethods())

const post_data = [];
router.post("/input", ctx => {
    post_data.push({
        date: new Date(),
        text: ctx.request.body.text 
    })
    console.log(post_data)
})
router.get("/reload", ctx => {
    ctx.body = post_data
})

router.get("/ping", ctx => {
	ctx.body = "pong"
})

app.listen(3000)
