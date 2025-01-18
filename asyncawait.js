function api(dataId){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success");
        },4000);
    });
}

async function getData(){
    console.log("getting data 1.....")
    await api(1);
    console.log("getting data 2.....")
    await api(2);
    console.log("getting data 3.....")
    await api(3);
    console.log("getting data 4.....")
    await api(4);
}
console.log(getData());