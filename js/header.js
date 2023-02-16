const body = document.body;
const head = document.head;


head.innerHTML += '<link rel="stylesheet" href="css/header.css">'

let get = new XMLHttpRequest();
get.open("GET", "../components/header.html");
get.send();

get.onload = () => {
    if(get.status == 200){
        let newH = get.responseText;
        console.log("🚀 ~ file: header.js:14 ~ responseText", responseText)
        console.log(newH)

        body.innerHTML += newH;
    }
}