class Machine extends React.Component {
    render() {
        const {s1, s2, s3} = this.props;
        const msg = (s1 === s2) && (s2 === s3) ? 'You Win' : 'You Lose'
        return (
            <div>
                <span>{ s1 }{ s2 }{ s3 }</span>
                <p>{ msg }</p>  
            </div>
        )
    }
}