const cards = document.querySelectorAll(".foto-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("ativa");

    });

});
const musica = document.getElementById("musica");
const btn = document.getElementById("btnMusica");

btn.addEventListener("click", () => {
    musica.play()
        .then(() => {
            console.log("Música tocando!");
        })
        .catch((erro) => {
            console.error("Erro:", erro);
        });
});