const ufSelected = document.querySelector("select[name=uf]")

function populateUFs(){
    /*fetch é interface para API - resulta uma promisse*/
    /*.then(function()) -> resultado da promisse. Caso seja solicitado um retorno no modo Json é realizado uma nova promisse, necessitando de outro .then()*/
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then( res =>{ return res.json() }).then( states => {
        for (state of states)
        {
            /*innerHTML é propriedade de elementos HTML*/
            ufSelected.innerHTML += `<option value="${state.id}">${state.nome}</option>`/*adiciona option no selected*/
        }
    })
}

function getCities(event){
    const citySelect = document.querySelector("select[name=city")
    const stateInput = document.querySelector("input[name=state")

    const ufCurrent = event.target.value

    /*fazendo mascara de envio*/
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    /*limpa os campos options para não gerar bug de acumulo de cidades*/
    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true /*desbloquear o select city*/
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufCurrent}/municipios`

    fetch(url).then(res => {return res.json()}).then( cities => {
        for (city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
        citySelect.disabled = false /*desbloquear o select city*/
    })
}

populateUFs()

/*faz com que a função pegue o valor adquirido no select = uf*/
document.querySelector("select[name=uf]").addEventListener("change", getCities)

/*ITENS DE COLETA*/
//pegar todos os li

/*adicionar array para buscar os itens selecionados*/
let selectedItems = []
const colectedItems = document.querySelector("input[name=items]")

const itemsToCollect = document.querySelectorAll(".items-grid li")
for(let item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}

function handleSelectedItem(event){
    const itemLi = event.target/*pegou o evento no alvo*/

    /*pegar apenas o numero do data-id*/
    const itemId = itemLi.dataset.id/*dataset.id => pegar apenas os numeros do id*/
    
    /*adicionar ou remover uma classe com JS*/
    itemLi.classList.toggle("selected")

    /*verificar se existe itens selecionados*/
    /*fazer busca pelo findIndex()*/
    /*alreadySelected será o array com os indexs do selectedItems*/
    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId
        /*item (parametro que sera pego ao clicar) é igual ao itemId?*/
        return itemFound /*colocará o index do item achado*/
        
    } )
    /* SE o item estiver selecionado, tirar os itens da seleção*/
    if (alreadySelected >= 0)
    {
        /*selectedItems.filter() filtrará o array e adicionará no filteredItems os retornos verdadeiros
        Caso seja o retorno falso, retirará do array*/
        const filteredItems = selectedItems.filter( item => {
            const itemDiferent = item != itemId
            return itemDiferent/*retorno falso*/
        })
        selectedItems = filteredItems /*atualizo o selectedItems*/
    }
    else{
        selectedItems.push(itemId)/*Add os itens não listados*/
        
    }
    
    colectedItems.value = selectedItems /*passo o selectedItems para o value do input*/

}

