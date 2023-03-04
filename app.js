const inputNome = document.getElementById('nome')
const inputPreco = document.getElementById('preco')
const inputParcela = document.getElementById('parcela')
const parcelasList = document.getElementById('parcelas')
const tabela = document.getElementById('tabela')

let produtoSelecionado=""

const quantidadeDeParcelas = () =>{
    const listaParcelas = []
    
    listaParcelas.forEach(parcela =>{
        // if(parcela.value !== 6){
            parcelasList.appendChild(parcela)
        // }
    })


    
}

quantidadeDeParcelas()

// const 

inputNome.addEventListener('change', (e)=>{
    console.log('produto',e.target.value)
})

inputParcela.addEventListener('change', (e)=>{
    if(inputParcela.target.value){
        console.log('não nulo')
        // const valor = Number(e.target.value)
        // const parcela = produtoSelecionado.preco/valor
        // if(valor === 6){
        //     let parcelaComJuros = parcela * 10/100
        //     parcela = parcela + parcelaComJuros
        //     console.log(`Juros: ${valor}x de R$ ${Math.floor(parcela)},00`)
        // }else{
        //     console.log(`${valor}x de R$ ${Math.floor(parcela)},00`)
        // }
    }
})