const blogs = [
    {
        question: "What is useState and how does it work in React?",
        answer: "useState is a React Hook that allows you to add state management to functional components. It returns an array with two elements: the current state value and a function to update it. You can use it to manage local component state."
    },
    {
        question: "What is the purpose of useEffect in React?",
        answer: "useEffect is a React Hook used to perform side effects in functional components. It runs after the render and can be used for tasks like data fetching, subscriptions, or manually changing the DOM. You can also control when it runs by providing dependencies."
    },
    {
        question: "What is a custom hook in React and when should you use one?",
        answer: "A custom hook is a reusable function in React that starts with 'use' and encapsulates logic using other hooks. You should use one when you need to share logic between multiple components without duplicating code."
    },
    {
        question: "Difference between controlled and uncontrolled components. Which one is better?",
        answer: "Controlled components have their state managed by React, while uncontrolled components manage their state internally using refs. Controlled components are generally better as they provide more predictable and testable behavior."
    },
    {
        question: "Tell us something about useFormStatus() in React.",
        answer: "useFormStatus() is a React Hook that provides information about the status of a form, such as whether it is submitting or has errors. It is often used in libraries like React Hook Form to manage form state efficiently."
    }
];

export default blogs;