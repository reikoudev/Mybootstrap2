const cards = document.querySelectorAll(".foto-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("ativa");

    });

});
document.addEventListener("DOMContentLoaded", () => {

    const musica = document.getElementById("musica");
    const botao = document.getElementById("playMusic");


    botao.addEventListener("click", () => {

        if (musica.paused) {

            musica.play();
            botao.innerHTML = "⏸️";

        } else {

            musica.pause();
            botao.innerHTML = "🎵";

        }

    });

});
const sim = document.getElementById("sim");
const nao = document.getElementById("nao");


nao.addEventListener("mouseover",()=>{


    nao.style.position="fixed";


    nao.style.left =
    Math.random()*80+"vw";


    nao.style.top =
    Math.random()*80+"vh";


});



sim.addEventListener("click",()=>{


document.body.innerHTML = `

<div class="pedido-container">


<h1>
Eu sabia que era você ❤️
</h1>


<div class="heart-final">
💗
</div>


<h2>
Obrigado por escolher viver essa história comigo.
</h2>


</div>

`;


});