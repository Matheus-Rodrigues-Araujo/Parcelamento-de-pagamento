const inputProduto = document.getElementById('produto')
const inputPreco = document.getElementById('preco')
const inputParcela = document.getElementById('input-parcela')
const submitBtn = document.getElementById('submit')

const nomeProduto = document.getElementById('nome-produto')
const totalPagamento = document.getElementById('total-pagamento')

const tabelaFaturas = document.getElementById('tabela-faturas')
const tableHeaders = document.getElementById('table-headers')
const produtoSelecionado = {nome:"", preco:null, parcelas: null}

const criarFatura = (quantidadeParcelas, valorTotal, nome) =>{
    let parcela
    const headers = "<tr class='headers' ><th>Parcelas</th><th>Valor</th><tr>"
    
    if(quantidadeParcelas > 5){
        let rows = ""
        let juro = (valorTotal * 10)/100
        valorTotal = Number(valorTotal) + Number(juro)
        parcela = (valorTotal/quantidadeParcelas).toFixed(2)

        for(let i=1; i<=quantidadeParcelas; i++){
           rows+=
           `<tr>
             <td>${i}ª</td>
             <td>R$ ${parcela}</td>
           </tr>`
        }
        nomeProduto.innerText = nome
        tabelaFaturas.innerHTML = headers + rows
    }else{
        let rows = ""
        parcela = (valorTotal/quantidadeParcelas).toFixed(2)

        for(let i=1; i<=quantidadeParcelas; i++){
           rows+=
           `<tr>
             <td>${i}ª</td>
             <td>R$ ${parcela}</td>
           </tr>`
        }
        nomeProduto.innerText = nome

        tabelaFaturas.innerHTML = headers + rows
    }
}

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
        criarFatura(parcelas, preco, nome)
    }
})