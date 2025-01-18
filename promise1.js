function getData(dataId,getNextdata){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
        console.log("data",dataId);
        resolve("sucess");
        //reject("network error");
        if(getNextdata){
            getNextdata();
        }
    });
},1000);
}
let promise = getData(1 , () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
});

console.log("Fetching data 1.....")
getData(1).then((res) => {
    console.log("Fetching data 2.....")
    getData(2).then((res) => {});
});

promise.then((res) => {
    console.log("promise fullfilled",res);
});
/*promise.catch((err) => {
    console.log("rejected",err);
})*/
