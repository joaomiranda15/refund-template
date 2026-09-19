// Seleciona os elementos do formulário
const amount = document.getElementById("amount");
const expense = document.getElementById("expense")

// Validação de campos no formulário.
amount.oninput = () => {
    // Obtém o valor atual do input e remove os caracteres não numéricos
    let value = amount.value.replace(/\D/g, "");

    // Transforma o valor em centavos.
    value = Number(value) / 100

    // Atualiza o valor do input
    amount.value = formatCurrencyBRL(value)
}

// Formatação de moeda BRL
function formatCurrencyBRL(value) {
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    return value;
}