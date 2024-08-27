let produtos = [];

// Coloque seus produtos no lugar de null
let produto1 = null;
let produto2 = null;
let produto3 = null;

// Produtos que queira remover
let remover1 = null;
let remover2 = null;
let remover3 = null;

function adicionar(a) { 
    if (typeof a === 'number') {
        console.log("Não pode ser um número");
    } else if (a === null) {
        console.log("Não pode estar vazio");
    } else {
        produtos.push(a);
    }
}

function remover(b) { 
    if (typeof b === 'number') {
        console.log("Não pode ser um número");
    } else if (b === null) {
        console.log("Não pode estar vazio");
    } else {
        let index = produtos.indexOf(b);
        if (index !== -1) {
            produtos.splice(index, 1);
        } else {
            console.log("Produto não removido/encontrado");
        }
    }
}

adicionar(produto1);
adicionar(produto2);
adicionar(produto3);

console.log("(Antes da remoção) Produtos: " + produtos);

remover(remover1);
remover(remover2);
remover(remover3);

console.log("(Depois da remoção) Produtos: " + produtos);

console.log("(Apenas 1 produto) Produtos: " + produtos[0]);
