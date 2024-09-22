
function jogar(){
    var img = document.querySelectorAll("img");
    let dado1 = numAleatorio();
    let dado2 = numAleatorio();
    img[0].src = "./images/dado"+dado1+".png";
    img[1].src = "./images/dado"+dado2+".png";
    console.log(img[0].getAttribute("src"));
    console.log(img[1].getAttribute("src"));

    const ganhador = document.querySelector("h1");
    if(dado1 > dado2){
       ganhador.innerText = "Player1 Ganhou";
       let num = parseInt(document.getElementById("pont1").innerText) + 1;
       document.getElementById("pont1").innerText = num;   
    }else if (dado2 > dado1) {
       ganhador.innerHTML = "Player2 Ganhou";
       let num = parseInt(document.getElementById("pont2").innerText) + 1;
       document.getElementById("pont2").innerText = num;   
    } else {
        ganhador.innerHTML = "Empate";
    }
}

function numAleatorio(){
    return Math.floor(Math.random()*6+1);
}
