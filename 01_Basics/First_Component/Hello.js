class Hello extends React.Component {
    static defaultProps = {
        from: 'Anonymous',
        to: 'Anonymous',
        bangs: 1
    }
    render() {
        let bangs = '!'.repeat(this.props.bangs);
        return ( 
            <div className="Hello">
                <h1 style={ {fontSize: '40px'} }>Hello {this.props.to} from {this.props.from}{bangs}</h1>    
            </div>
        )
    }
} 