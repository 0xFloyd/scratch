https://www.youtube.com/watch?v=93p3LxR9xfM&t=532s

create-react-app 

create "components" folder in src folder. for react components 

install ES7 React/Redux/GraphQL/React-Native snippets  VSCode extension 

rcc <tab> --> creates class component react 
rfc <tab> --> react functional component 

create Posts react component 

when component mounts, we want to make request to API to fetch our posts. we'll put this into lifecycle method called "componentDidMount". This runs right away when component mounts 

we then fetch from random internet API:
fetch(fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => console.log(json)))

we then want to put this information into our components state. but we havent implemented redux yet, so we cant put it into app state. so we create constructor in app component to temporarily hold state until we implement redux  

then, add setState to componentDidMount. add these psots to state. now we need to add this to our render.

create variable postItems in render method 
map through the posts array. each div needs "key" or react will complain

Now we create a Postform component. value of form elements is state. and each form element needs an onChange event so they can handle input (typing doesnt work without this)

Now we have to bind the onChange event to the constructor 
 this.onChange = this.onChange.bind(this);

then create onChange event function 

onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
this sets the name of the target (where user is typing) to the value thats typed 

Go to devtools in firefox. click the >> and select components. here you can see the state, which changes as you type

now we need to handle formsubmit 
add onsubmit to form 