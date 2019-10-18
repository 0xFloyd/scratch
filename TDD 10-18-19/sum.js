function sum(a, b) {
    return a + b;
}
module.exports = sum;

const someOrder = {
    items: [
        { name: 'Dragon food', price: 8, quantity: 8 },
        { name: 'Dragon cage (small)', price: 800, quantity: 2 },
        {name: 'Shipping', price: 40, shipping: true}
    ]
}


const orderTotal = order => {
    const totalItemes = order.items.filter(x => !x.shipping)    //filter out iutems where shipping is false 
        .reduce((previous, current) => previous + (current.price * current.quantity), 0)
    const shippingItem = order.items.find(x => !!x.shipping)        //find shipping items in array
    const shipping = totalItems > 1000 ? 0: shippingItem.price      //calculate shipping, free if price above 1000 
    return totalItems + shipping
}

let result = orderTotal(someOrder);
result  



//Lesson: code feels simple in the beginning, but it gets complex fast before you know it. it grows into multiple cases, too many to keep track of















orderTotal = (order) => {
    totalNormalItems =
        order.items
            .filter(x => !x.shipping)
            .reduce((prev, cur) => prev + cur.quantity * cur.price, 0)
    shippingItem =
        order.items.find(x => !!x.shipping)
    shipping = totalNormalItems > 1000 ? 0 : shippingItem.price
    return totalNormalItems + shipping
}

result = orderTotal(someOrder)
result