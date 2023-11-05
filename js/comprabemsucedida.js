
// Adiciona um evento de clique a todos os botões com a classe "comprarBtn"
var buttons = document.querySelectorAll(".comprarBtn");
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        $('#compraSucessoModal').modal('show'); // Exibe o modal

        setTimeout(function() {
        $('#compraSucessoModal').modal('hide');
    }, 1500);
    });
});
