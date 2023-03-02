const inputProduto = document.getElementById('input-produto')
const datalistProdutos = document.getElementById('produtos')
const inputParcela = document.getElementById('input-parcela')
const tabela = document.getElementById('tabela')
const lista_produtos = [
    {
        name: 'Notebook Acer',
        preco: 3850.00
    },
    {
        name: 'Samsung Galaxy G23',
        preco: 3500.00

    },
    {
        name: 'PS5',
        preco: 4800.00

    },
    {
        name: 'XBOX SERIES S',
        preco: 2400.00

    },
    {
        name: 'Ipad',
        preco: 7500.00
    }
]
let produtoSelecionado=""

const configurarOpcoesPordutos = () =>{
    lista_produtos.forEach(e=>{
        const option = document.createElement('option')
        option.value = e.preco
        option.innerHTML = e.name
        datalistProdutos.appendChild(option)
    })
}

configurarOpcoesPordutos()

// const 

inputProduto.addEventListener('change', (e)=>{
    produtoSelecionado = {preco: e.target.value}
})

inputParcela.addEventListener('change', (e)=>{
    if(produtoSelecionado){
        const valor = Number(e.target.value)
        const parcela = produtoSelecionado.preco/valor
        if(valor === 6){
            let parcelaComJuros = parcela * 10/100
            parcela = parcela + parcelaComJuros
            console.log(`Juros: ${valor}x de R$ ${Math.floor(parcela)},00`)
        }else{
            console.log(`${valor}x de R$ ${Math.floor(parcela)},00`)
        }
    }
})