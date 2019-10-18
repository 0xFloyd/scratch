const orderTotal = require('./order-total');


it('works', () => {         //  tests have assertions 
    expect(1).toBe(1)
})

it('Quantity', ()=> {
    expect(orderTotal({
        items: [
            { 'name': 'Dragon food', price: 2, quantity: 3 },
    
        ]
    })).toBe(6)
})

it('No quantity specified', ()=> {
    expect(orderTotal({
        items: [
            { 'name': 'Dragon food', price: 2},

        ]
    })).toBe(2)
})


it('Example 1', () => {
    expect(orderTotal({
        items: [
            { name: 'Dragon food', price: 8, quantity: 1 },
            { name: 'Dragon cage (small)', price: 800, quantity: 1 },
        ]
    })).toBe(808)
})

it('Example 1', () => {
    expect(orderTotal({
        items: [
            { name: 'Dragon food', price: 20, quantity: 1 },
            { name: 'Dragon cage (small)', price: 40, quantity: 1 },
        ]
    })).toBe(60)
})

/*
if (orderTotal({
    items: [
        { name: 'Dragon food', price: 8, quantity: 1 },
        { name: 'Dragon cage (small)', price: 800, quantity: 1 },
    ]
}) !== 808) {
    throw new Error('Check fail: Happy Path')
}

if (orderTotal({
    items: [
        { name: 'Dragon food', price: 20, quantity: 8 },
        { name: 'Dragon cage (small)', price: 40, quantity: 2 },
    ]
}) !== 60) {
    throw new Error('Check fail: Happy Path')
}*/