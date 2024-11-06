const getPromise = ()=> {
    return new Promise((resolve, reject)=>{
        console.log("I am promise!");
        resolve("success");
    });
};

let promise = getPromise();
promise.then(()=>{
    console.log("promise fullfilled");
});