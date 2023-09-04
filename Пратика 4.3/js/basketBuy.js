const priceBuy = document.getElementById('priceBuy');
const valueProducts = document.getElementById('valueProducts');

const btnInBuyBaset = document.querySelectorAll('.btn__flex-item');

for(let elem of btnInBuyBaset){
    elem.addEventListener('click', () => {
        valueProducts.textContent = getNumPlusOne(valueProducts.textContent);
        priceBuy.textContent = getSumBuy(priceBuy.textContent, elem.previousElementSibling.textContent);
        console.log(parseFloat(elem.previousElementSibling.textContent));
    });
}

function getNumPlusOne(valueProducts){
    return Number(valueProducts) + 1;
}

function getSumBuy(priceBuy, nowPrice){
    return parseFloat(priceBuy) + parseFloat(nowPrice);
}