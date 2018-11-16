//'Async:now and later'
async function fun1() {
    msg="Hello World"
    num=Math.floor(Math.random()*100)
    console.log(msg ,num)
}
fun1()
setTimeout(() => {
    let m4=nu => nu*4
    console.log(m4(num))    
}, 2000);
//'Callbacks'
let getWords=() => {
    setTimeout(()=>{console.log('Walrus')},3000)
    setTimeout(()=>{console.log('Potato')},2000)
    setTimeout(()=>{console.log('Lobster')},1000)
    console.log('Tank')
};
//tank lobster potato walrus
getWords()
function countdown(num,msg) {    
    let cd=setInterval(function(){
        console.log(num);
        num--
        if (num === 0) {
            done(msg);
            clearInterval(cd);
        }
    }, 1000);
}
function done(msg){console.log(msg)}

countdown(10,'Blast Off')
//Promises
var glv1= true
let orderingChickenSandwich=new Promise(function(resolve, reject) {
    if(glv1){var order={sandwich: 'chicken', vegtable: 'lettuce'}
    resolve(order);
    }else{
    let err=new Error("Did not order.");
    reject(err)
    }
})
orderingChickenSandwich.then((order)=>{
    
    console.log(order)
},(err)=>{
    
    console.log(err)
}).catch((err)=>{
    console.log(err)
})
function orderFood() {
    orderingChickenSandwich
}
orderFood()
//Chaining Promises
let fail=new Error("somthing went wrong")
let mult=()=>{
    return new Promise(resolve => {
    setTimeout(()=>{
        let fir=Math.floor(Math.random()*100)
        console.log(fir)
        resolve(fir)
    },2000)})
};
let mby=(out,by)=>{
    return new Promise(resolve => {
    setTimeout(()=>{
        let int=out*by
        console.log(int)
        resolve(int)
    },2000)})}
mult().then(out => mby(out,2))
.then(out => mby(out,4))
.then(out => mby(out,6))
.catch((fail)=>{console.log(fail)})