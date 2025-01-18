//making two promisees
function async1(getData){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        console.log("data 1");
        resolve("success");
    });
},4000);
}

function async2(getData){
    return new Promise((resolve,rejected) =>{
        setTimeout(() => {
        console.log("data 2");
        resolve("success")
    });
},4000);
}
console.log("fetching data 1......")
async1().then((res) =>{
    console.log("fetching data 2......");
    async2().then((res) => {});
});