console.log("Harshad is a hackerrrr");
console.log("Rahon is a heckerrrr");

//this is a async function
setTimeout(() => {
    console.log("I am inside Sttimeout")
}, 0);

//this is a async function
setTimeout(() => {
    console.log("I am inside Sttimeout2")
}, 0);

console.log("The End")
//async funstion run after the script is executed


//callback function
const fn = () => {
    console.log("Nothing")
    
}

const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harshad", fn);
    document.head.append(sc)
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)
