const express=require('express')
const chalk=require('chalk')
const morgan=require('morgan');
const path=require('path');

const PORT=process.env.PORT||3000
const app=express();

const sessionsRouter=require('./src/routers/sessionsRouter');
const adminRouter=require('./src/routers/adminRouter');
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname,'/public/')));

app.set('views','./src/views')
app.set('view engine','ejs');

app.use('/sessions',sessionsRouter);
app.use('/admin',adminRouter);

app.get('/',(req,res)=>{
    res.render('index',{title:'Globamatics',data:['a','b','c']});
})

app.listen(PORT,()=>{
console.log(`listening on port ${chalk.green(PORT)}`);
})