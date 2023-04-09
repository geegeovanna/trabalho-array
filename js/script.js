const Frias = ["Violeta", "Verde", "Azul"];

const Quentes = ["Vermelho", "Laranja", "Amarelo"];
Quentes.reverse();


function frias() {
    const FriasElement = document.getElementById("coresfrias");
    FriasElement.innerHTML = Frias.join(", ");
}

function quentes() {
    const QuentesElement = document.getElementById("coresquentes");
    QuentesElement.innerHTML = Quentes.join(", ");
   
  }