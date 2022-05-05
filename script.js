let default1=document.getElementById("default");
let body=document.querySelector("body");
let button1=document.querySelector("button");
function trans(scrphone){
    default1.src=scrphone; 
}
function color(color){
    body.style.background=color;
}
// ********************************************/
let shopcart=document.querySelector(".fa-cart-shopping");
let counter=document.querySelector(".navigation h5");
count=0;
function counter1(){
    count+=1
    counter.style.display="block";
    counter.innerHTML=count;
}
// **********************************************//
let descr2=document.querySelector(".descr");
let shop=document.querySelector(".shop");
shop.addEventListener("click",()=>{
    descr2.classList.toggle("descr2");
})
// ***************************************************//
//  let store=[
//      {
//          "id":1,
//          "price":"100%",
//          "img":"images/0.png",
//      },
//      {
//         "id":2,
//         "price":"100%",
//         "img":"images/1.png",
//     },
//     {
//         "id":3,
//         "price":"100%",
//         "img":"images/2.png",
//     },
//     {
//         "id":4,
//        "price":"100%",
//         "img":"images/3.png",
//     },
//     {
//         "id":5,
//         "price":"100%",
//         "img":"images/4.png",
//     },
//     {
//         "id":6,
//         "price":"100%",
//         "img":"images/2.png",
//     },
//      {
//         "id":7,
//        "price":"100%",
//         "img":"images/3.png",
//     },
//     {
//         "id":8,
//        "price":"100%",
//         "img":"images/4.png",
//     }
//  ]

let descr3=document.querySelector(".descr");
function getdata(){
    if(localStorage!=null){
         descr3.innerHTML=localStorage.getItem("product");
    }
    
}
getdata();



 function info(price,url){
    let store2= `
       <div class="product">
         <img src= ${url} />
           <p>${price}$</p>
        </div>
     `
     store4="";
     store4+=localStorage.setItem("product",store2);  
   descr3.innerHTML+=localStorage.getItem("product");
 }
 //******************************************* */
 let b1=document.getElementById("b1");
 let b2=document.getElementById("b2");

function button3(){
    window.location='products.html';
}
function button2(){
    window.location='contact.html';
}