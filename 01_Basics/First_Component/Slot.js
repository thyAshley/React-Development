class Friend extends React.Component {
    render() {
        const {name, hobbies} = this.props
        return (
            <div>
                <p>{name}</p>
                <ul>
                    { hobbies.map(el => <li>{ el }</li>) }
                </ul>
            </div>
        )
    }
}