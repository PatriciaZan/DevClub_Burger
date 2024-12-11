const ul = document.querySelector('.list');
const btnMostrarTudo = document.querySelector('.btn-mostrarTudo');

//console.log(ul);
//let list = ''

function mostrarTudo(array) {
    let list = ''
    array.forEach(itens =>{ 
        list = list +
        `
        <li>
        <img src=${itens.src} alt="">
        <p>${itens.name}</p>
        <p class="item-price">R$ ${format(itens.price)}</p>
        </li>
        `
    })
    //console.log('click');
    
    ul.innerHTML = list
}
btnMostrarTudo.addEventListener('click',() => mostrarTudo(menuOptions))

//---------------------------------------------------------------//

const btnMapear = document.querySelector('.btn-mapear');
console.log(btnMapear);

function mapear(){
    const discount = menuOptions.map((itens) => ({
        ...itens,
        price: itens.price * 0.9,
        //name:  itens.name,
        //vegan: itens.vegan,
        //src:   itens.src
    }))
    mostrarTudo(discount)
}

btnMapear.addEventListener('click', mapear)

//---------------------------------------------------------------//

const btnReduce = document.querySelector('.btn-reduce');

function reduce(){
    const valorTotal = menuOptions.reduce((acc, itens) => acc + itens.price,0)
    ul.innerHTML =
    `
    <li>
    <p>O valor total é:</p>
    <p class="item-price">R$ ${format(valorTotal)}</p>
    </li>
    `
    
}

btnReduce.addEventListener('click', reduce);

//---------------------------------------------------------------//
const btnFilter = document.querySelector('.btn-filter')

function filter(){
    const veganFood = menuOptions.filter((itens) => itens.vegan === true)
    mostrarTudo(veganFood)
}

btnFilter.addEventListener('click', filter)

//---------------------------------------------------------------//
// Editar e formatar a moeda R$ 00,00

function format(itens){
    const newValue = itens.toLocaleString('pt-br', { 
        style: 'currency',
        currency: 'BRL',
    })
    return newValue;
}