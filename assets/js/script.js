const valueElement = document.querySelector("#value");
const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const resetButton = document.querySelector("#reset");

// Aqui estou criando uma função a ser chamada para que o meu HTML altere o valor ao pressionar o botão de MAIS, de MENOS ou RESETAR.
function updateValue() {
    valueElement.innerHTML = count;
}

// Aqui o contador desta variável começa como ZERO
let count = 0;

// Aqui o intervalo desta variavel começa com ZERO
let intervalId = 0;

// Primeiro evento no botão de MAIS. Criado a função para que a variavel intervalId seja repetida em sequencia comando a variavel COUNT + 1 toda vez que pressionar o mouse, e por sequencia chama a função updateValue para atualizar o HTML, e cada sequencia do intervalId é executado a cada 100 milésimos.
plusButton.addEventListener('mousedown', function () {
    intervalId = setInterval(function () {
        count += 1;
        updateValue();
    }, 100)
})

// Primeiro evento no botão de MAIS. Criado a função para que a variavel intervalId seja repetida em sequencia comando a variavel COUNT - 1 toda vez que pressionar o mouse, e por sequencia chama a função updateValue para atualizar o HTML, e cada sequencia do intervalId é executado a cada 100 milésimos.
minusButton.addEventListener('mousedown', function () {
    intervalId = setInterval(function () {
        count -= 1;
        updateValue();
    }, 100)
})

// Aqui ao clicar no botão reset, ele irá atualizar o HTML para ZERO.
resetButton.addEventListener('click', function () {
    count = 0;
    updateValue();
})

// Aqui no evento MOUSEUP, ele irá executar a função clearInterval para que deixe de executar repetidamente o evento mousedown.
document.addEventListener('mouseup', function () {
    clearInterval(intervalId);
})