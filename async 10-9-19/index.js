//  Demystifying JavaScript Closures, Callbacks and IIFEs
//  https://www.sitepoint.com/demystifying-javascript-closures-callbacks-iifes/


function setLocation(city) {
    var country = "France";

    function printLocation() {
        console.log("You are in " + city + ", " + country);
    }

    printLocation();
}

setLocation("Paris");  // output: You are in Paris, France

/* function that takes other functions as arguments or returns functions as its result is called a higher-order function, and the function that 
is passed as an argument is called a callback function. It’s named “callback” because at some point in time it is “called back” by the higher-order function. */

//      eventlsiteners use callbacks with the function thats passed "onCLick"

//  IIFEs --> Immediately-Invoked Function Expressions (IIFEs). invoking the function right as you create it with (){}();

const myFirstPromise = new Promise((resolve, reject) => {
    // do something asynchronous which eventually calls either:
    //
    //   resolve(someValue); // fulfilled
    // or
    //   reject("failure reason"); // rejected
});

let myFirstPromise = new Promise((resolve, reject) => {
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code. 
    // In reality, you will probably be using something like XHR or an HTML5 API.
    setTimeout(function () {
        resolve("Success!"); // Yay! Everything went well!
    }, 250);
});

myFirstPromise.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log("Yay! " + successMessage);
});

//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise