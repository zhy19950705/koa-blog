const Koa=require('koa')
const app=new Koa()

app.use(async(ctx)=>{
    ctx.body='hello world1'
})
app.listen(3000)