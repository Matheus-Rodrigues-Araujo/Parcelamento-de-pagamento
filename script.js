const inputProduto = document.getElementById('produto')
const inputPreco = document.getElementById('preco')
const inputParcela = document.getElementById('input-parcela')
const submitBtn = document.getElementById('submit')
const nomeProduto = document.getElementById('nome-produto')
const totalPagamento = document.getElementById('total-pagamento')
const tabelaFaturas = document.getElementById('tabela-faturas')

const produtoSelecionado = {nome:"", preco:null, parcelas: null}

const criarFatura = (quantidadeParcelas, valorTotal, nome) =>{
    nomeProduto.innerHTML = ""
    tabelaFaturas.innerHTML = ""
    totalPagamento.innerHTML = ""
    
    let parcela;

    if(quantidadeParcelas >= 5){
        let juro = (valorTotal * 10)/100
        valorTotal = Number(valorTotal) + Number(juro)
        parcela = valorTotal/quantidadeParcelas
        
        totalPagamento.innerHTML = `PAGAMENTO: R$ ${valorTotal}.<p class="juros" >10% de juros incluído!</p>`
        nomeProduto.innerHTML = nome
        
        for(let i=1; i<=quantidadeParcelas; i++){
            const tr = document.createElement('tr')
            const tdParcela = document.createElement('td')
            tdParcela.className = "td-parcela"
            const tdValor = document.createElement('td')
            tdParcela.innerText = `${i}ª Parcela`
            tdValor.innerText = `R$ ${parcela.toFixed(2)}`
            tr.append(tdParcela, tdValor)
            tabelaFaturas.appendChild(tr)
        }

    }else{

    parcela = valorTotal/quantidadeParcelas
    nomeProduto.innerHTML = nome
    totalPagamento.innerHTML = `PAGAMENTO: R$ ${valorTotal}`

    for(let i=1; i<=quantidadeParcelas; i++){
        const tr = document.createElement('tr')
        const tdParcela = document.createElement('td')
        tdParcela.className = "td-parcela"
        const tdValor = document.createElement('td')
        tdParcela.innerText = `${i}ª Parcela`
        tdValor.innerText = `R$ ${parcela.toFixed(2)}`
        tr.append(tdParcela, tdValor)
        tabelaFaturas.appendChild(tr)
    }}
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