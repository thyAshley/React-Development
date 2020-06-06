function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        return (
            <div>
                <h1>Your Number is { num }</h1>
                <p>{ num === 7 ? 'Lucky!' : 'Unlucky' }</p>
            </div>
        )
    }
}

ReactDOM.render(<NumPicker/>, document.querySelector('#root'));