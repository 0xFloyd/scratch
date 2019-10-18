//  https://www.youtube.com/watch?v=XsFQEUP1MxI

//  writing test first before code. WHAT? You only write code that there's a test for, so you only write code that's required 
//  writing test first ensures you're actually writing the tests. you'll slack if you dont do it first.
//  it's harder to write test after. because you need to breakdown your code again  

if (orderTotal({ 
    items: [
        { name: 'Dragon food', price: 8, quantity: 8 },
        { name: 'Dragon cage (small)', price: 800, quantity: 2 },
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
}



// Unit testing makes it obvious what code to write, and prevents extra code