/*function getData(dataId,getNextdata){
    setTimeout(() =>{
        console.log("data",dataId);
        getNextdata();
    },2000);
}
getData(1,getData(2));
here getData(2) is passed as argument and not callback
it pass has getData(1,undifined);
The line getNextdata(); is used to invoke a callback function that is passed as the second argument to the getData function.
is a safety check to ensure that the getNextdata callback is defined before attempting to execute it.*/
function getData(dataId,getNextdata){
    setTimeout(() =>{
        console.log("data",dataId);
        if(getNextdata){
        getNextdata();
        }
    },2000);
}
console.log("getting data 1.....");
getData(1, () => {
    console.log("getting 2.....");
    getData(2, () => {
        console.log("getting data 3.....");
        getData(3, () => {
            console.log("getting data 4.....");
            getData(4);
        });
    });
});