started assessment 3:35

### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
*Front-end framework. You use it to help build front end
- What is Babel?
*It compiles React to JS
- What is JSX?
*JavaScript XML
- How is a Component created in React?
*with a function
- What are some difference between state and props?
*props are an object of inputs, state is data that changes
- What is a controlled component?
*An element whose value is controlled by React
- What is an uncontrolled component?
*Component not controlled by React
- What is the purpose of the `key` prop when rendering a list of components?
*So each thing in a list is unique so React knows what was changed
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
*If you delete something in the array, all the index's change
- Describe useEffect.  What use cases is it used for in React components?
*It allows something to happen after the render without reactivating
- What does useRef do?  Does a change to a ref value cause a rerender of a component?
*It allows you to select something on the dom without having to select each time a component is rendered (no)
- When would you use a ref? When wouldn't you use one?
*For something like file input. You wouldn't use it to change stuff in the DOM
- What is a custom hook in React? 
*It's like useEffect and useRef, except you make it yourself