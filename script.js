var result = document.getElementById("result");
var car_white = document.getElementById("white");
var car_red = document.getElementById("red");
var btn_circle_white = document.getElementById("branco");
var btn_circle_red = document.getElementById("vermelho");

//botões de controle
var btns = document.getElementsByClassName("btn");

var carroSelecionado = null;
 

car_white.addEventListener("click", alt_car_white);
car_red.addEventListener("click", alt_car_red);
btn_circle_white.addEventListener("click", alt_car_white);
btn_circle_red.addEventListener("click", alt_car_red);
document.addEventListener("keydown", function(event){
    var tecla = event.key;
    if(tecla == "ArrowUp"){
        acelerar(); 
    } 
    if(tecla == "ArrowDown"){
        desacelerar(); 
    } 
});

btns[0].addEventListener("click", rst)
btns[1].addEventListener("click", acelerar)
btns[2].addEventListener("click", desacelerar)


function alt_car_white(){
    carroSelecionado = "white";
    result.textContent = "Branco"
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    
for(i=0; i<=2; i++){
    btns[i].style.display = "block"
    console.log(i)
 }
}

function alt_car_red(){
    carroSelecionado = "red"; 
    result.textContent = "Vermelho"
    document.body.style.backgroundColor = "red"
    document.body.style.color = "black"

    
    for(i=0; i<=2; i++){
        btns[i].style.display = "block"
        console.log(i)
    }
}

 function rst(){
    result.textContent = "?"
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
    carroSelecionado = null; 

    
    for(i=0; i<=2; i++){
        btns[i].style.display = "none"
        console.log(i)
    }

    
    car_white.style.top = "400px";
    car_red.style.top = "400px";
 }

 function acelerar(){
    if(!carroSelecionado){ 
        alert("Selecione primeiro um dos carros.");
        return;
    }

    var carro = document.getElementById(carroSelecionado); 
    var top = parseInt(window.getComputedStyle(carro).top)
    var height = parseInt(window.getComputedStyle(carro).height)
    var left = parseInt(window.getComputedStyle(carro).left) 
    if(carroSelecionado == "white") {
        left = left + 1
        top = top - 1
        height = height - 1
    } else if(carroSelecionado == "red") {
        left = left - 1
        top = top - 1
        height = height - 1
    }
    carro.style.top = top + "px" 
    carro.style.height = height + "px"
    carro.style.left = left + "px"
 }

 
 function desacelerar(){
    if(!carroSelecionado){
        alert("Selecione primeiro um dos carros.");
        return;
    }

    var carro = document.getElementById(carroSelecionado);
    var top = parseInt(window.getComputedStyle(carro).top);
    var height = parseInt(window.getComputedStyle(carro).height);
    var left = parseInt(window.getComputedStyle(carro).left);
    if(carroSelecionado == "white") {
        left = left - 1
        top = top + 1
        height = height + 1
    } else if(carroSelecionado == "red") {
        left = left + 1
        top = top + 1
        height = height + 1
    }
    carro.style.height = height + "px";
    carro.style.left = left + "px";
    carro.style.top = top + "px";

 }
