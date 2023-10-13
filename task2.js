const goods = [
    {
        id: 1,          
        name: "Рубашка",
        description: "Рубашка мужская",
        sizes: "3XL", 
        price: 100,  
        available: true,
    },
    {
        id: 2,          
        name: "Кроссовки",
        description: "Кроссовки для бега", 
        sizes: "43", 
        price: 200,  
        available: true,
    },
    {
        id: 3,
        name: "Туфли",
        description: "Женские",
        sizes: "38",
        price: 300,
        available: true, 
    },
    {
        id: 4,         
        name: "Сапоги",
        description: "Зимние, женские", 
        sizes: "38",      
        price: 400,       
        available: false, 
    },
    {
        id: 5,
        name: "Пальто",  
        description: "Мужское", 
        sizes: "XXL",  
        price: 500,    
        available: true,
    }
]
const basket = [
    {
        good: goods[1].id,
        amount: 2,   
    },
    {
        good: goods[2].id,
        amount: 3,   
    }
]


console.log(goods)
console.log(basket)

console.log('Количество товара в каталоге:' + goods.length)
console.log('Количество товара в корзине:' + basket.length)

function check_good(_id) {
    // Проверка, что товар в наличии)
    for (let i = 0; i <= goods.length-1; i++) {
        if (goods[i].id == _id && goods[i].available == false) { 
            return false
        } 
    } 
    return true
}

function basketAdd(id, amount) {
    // Добавление товаров в корзину
    console.log(`Добавление ${id} Артикула в корзину.`)
    if (check_good(id) === true) {
        basket.push(
            {
                good: id,
                amount: amount,   
            }
        )                    
    } else console.log(id + ' Артикула нет на складе.')
}

function basketDel(id) {
    // Удаление товара из корзины
    for (i = 0; i <= basket.length-1; i++) {
        if ( basket[i].good === id ) {
            basket.splice(i, 1)
            console.log('Удалили Артикул ' + id)
        }
    }
}

function basketClear() {
    basket.splice(0, basket.length)
    console.log('Очистка корзины')
}

function basketSum() {
    console.log('Общее количество и сумма корзины.')
    let sum = {
        amount: 0,
        total: 0,
    }
    for (i = 0; i <= basket.length-1; i++) {
        sum.amount += basket[i].amount
        for (j = 0; j <= goods.length-1; j++) {
            if (goods[j].id == basket[i].good) {
                sum.total += goods[j].price * basket[i].amount
                break
            }
        } 
    }
    
    return sum
}


console.log('')
console.log('Проверка результатов:')
// Добавление в Корзину
basketAdd(1,1)
console.log(basket)
console.log(basketSum())
console.log('')
// Добавление в Корзину
basketAdd(4,4)
console.log('')
// Удаление из корзины Артикула 2
basketDel(2)
console.log(basket)
console.log(basketSum())
console.log('')
// Очистка Корзины
basketClear()
console.log(basket)
console.log(basketSum())


