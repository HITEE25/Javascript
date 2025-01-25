let button = document.querySelector("button");
let curmode = "light";
let body = document.querySelector("body");

button.addEventListener ("click", () => {
    if(curmode ==="light"){
        curmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        curmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(curmode);
});