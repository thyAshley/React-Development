class Hello extends React.Component {
    render() {
        return (
            <h1>Hello There!</h1>
        )
    }
}

ReactDOM.render(<Hello/>, document.querySelector('#root'))