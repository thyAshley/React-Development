class App extends React.Component {
    render() {
        return (
            <div>
                <Hello from="Me" to="You"/>
                <Hello from="Ringo" to="Sonny"/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));