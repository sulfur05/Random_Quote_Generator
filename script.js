let quote= document.getElementById("quote");
let author= document.getElementById("author");
let button= document.getElementById("btn");

const quoteLink = "https://dummyjson.com/quotes/random";

let newQuote = ()=>{
    fetch(quoteLink)
        .then((data)=>data.json())
        .then((item)=>{
            console.log(item.quote);
            document.getElementsByClassName("quoteBox")[0].innerHTML=item.quote;

        })
}

document.getElementsByTagName("button")[0].addEventListener("click", newQuote);