const Hello = () => {
    const myElement = <h1>I Love JSX!</h1>
    const sum = 5+5;
    return (
        <div>
            <h1>hello world</h1>
            {myElement}
            <h2>React is {sum} times better with JSX</h2>
        </div>
    )
}
export default Hello;