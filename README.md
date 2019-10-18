# scratch
This file will serve as a gigantic practice folder for small code examples and learning different concepts. 



# 10/12/19 
# Async and Await
https://www.theodinproject.com/courses/javascript/lessons/async-and-await?ref=lnav#learning-outcomes

 async and await are two keywords that can help make asynchronous read more like synchronous code. This can help code look cleaner while keeping the benefits of asynchronous code.

Learning Outcomes

    How do you declare an async function?
    What does the async keyword do?
    What does the await keyword do?
    What is returned from an async function?
    What happens when an error is thrown inside an async function?
    How can you handle errors inside an async function?


An important thing to understand is async functions are just syntactical sugar for promises.

https://codeburst.io/javascript-learn-promises-f1eaa00c5461
Why do we need Promises?

Promises (like callbacks) allow us to wait on certain code to finish execution prior to running the next bit of code.

Why is this important? Think about a website that loads data from an API then processes and formats the data to display to the user. If we try to process and format our data before the API has even fetched the information, we’re either going to get an error or a blank website. By using a Promise, we can ensure that the API data isn’t processed/formatted until after our API call has succeeded.
What is a Promise?

In JavaScript, a Promise represents the eventual result of an asynchronous operation. Think of it as a placeholder. This placeholder is essentially an object on which we can attach callbacks.

https://codeburst.io/javascript-es-2017-learn-async-await-by-example-48acc58bad65
What is Async/Await?

    The newest way to write asynchronous code in JavaScript.
    It is non blocking (just like promises and callbacks).
    Async/Await was created to simplify the process of working with and writing chained promises.
    Async functions return a Promise. If the function throws an error, the Promise will be rejected. If the function returns a value, the Promise will be resolved.