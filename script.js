const inputProduto = document.getElementById('produto')
const inputPreco = document.getElementById('preco')
const inputParcela = document.getElementById('input-parcela')
const submitBtn = document.getElementById('submit')
const tabela = document.getElementById('tabela')

const produtoSelecionado = {nome:"", preco:null, parcelas: null}

inputProduto.addEventListener('change', (e)=>{
    produtoSelecionado.nome = e.target.value
})

inputPreco.addEventListener('change', (e)=>{
    produtoSelecionado.preco = e.target.value
})

inputParcela.addEventListener('change', (e)=>{
    produtoSelecionado.parcelas = e.target.value
})

submitBtn.addEventListener('click', ()=>{
    const {nome, preco, parcelas} = produtoSelecionado
    if(nome && preco && parcelas){
        console.log(produtoSelecionado)
    }
})
// inputParcela.addEventListener('change', (e)=>{
//     if(produtoSelecionado){
//         const valor = Number(e.target.value)
//         const parcela = produtoSelecionado.preco/valor
//         if(valor === 6){
//             let parcelaComJuros = parcela * 10/100
//             parcela = parcela + parcelaComJuros
//             console.log(`Juros: ${valor}x de R$ ${Math.floor(parcela)},00`)
//         }else{
//             console.log(`${valor}x de R$ ${Math.floor(parcela)},00`)
//         }
//     }
// })