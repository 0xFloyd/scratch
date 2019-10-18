//  An important thing to understand is async functions are just syntactical sugar for promises


async function getPersonsInfo(name) {
    const people = await server.getPeople();
    const person = people.find(person => { return person.name === name });
    return person;
}

const yourAsyncFunction = async () => {
    // do something asynchronously and return a promise
    return result;
}

anArray.forEach(async item => {
    // do something asynchronously for each item in 'anArray'
    // one could also use .map here to return an array of promises to use with 'Promise.all()'
});

server.getPeople().then(async people => {
    people.forEach(person => {
        // do something asynchronously for each person
    });
});

//  The await keyword is used to get a value from a function where you would normally use .then(). Instead of calling .then() after the asynchronous function, you would simply assign a variable to the result using await, 
//  then you can use the result in your code as you would in your synchronous code.

asyncFunctionCall().catch(err => {
    console.error(err)
});

async function getPersonsInfo(name) {
    try {
        const people = await server.getPeople();
        const person = people.find(person => { return person.name === name });
        return person;
    } catch (error) {
        // Handle the error any way you'd like
    }
}
