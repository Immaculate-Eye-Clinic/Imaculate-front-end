import React from 'react'

class Prop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
    }
    render() {
        return (
                <div>
                    <div>
                        <button onClick={() => this.setState({open: !this.state.open})}>
                            <div>
                            <h1 className='hi'>{this.props.head}</h1>
                            <h1 className='h'>{this.state.open === false ? '+' : '-'}</h1>
                            </div>
                        </button>
                        {this.state.open && 
                            <div>
                                <p className='p'>
                                {this.props.children}
                                </p>
                            </div>
                        }<hr />
                    </div>
            </div>
        )
    }
}

export default Prop
