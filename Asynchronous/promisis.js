/*let k = new Promise((resolve,reject)=>{
    let a = 1+1;
    if (a==2){
        resolve('ji')
    }else{
        reject('no')
    }

});

k.then((message)=>{
    console.log("hi"+message);
})

//
(new Promise((resolve, reject) => { reject("Nope"); }))
.then(() => { console.log("success") })
.catch(() => { console.log("fail") })
.finally(() => { console.log("finally") });
//event loop 
console.log("jdfi");
setTimeout(function cb(){
    console.log("tfdlj")
},0);
console.log( "me");
*/


//event loop question

Promise.resolve().then(()=>console.log(1));
setTimeout(()=>console.log(2),10);
queueMicrotask(()=>{console.log(3)
    queueMicrotask(()=>console.log(4))
});
console.log(5);
