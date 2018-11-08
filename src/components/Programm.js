import React, {Component} from 'react'

class Programm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: props.defaultOpen
        }
    }  

    componentWillMount() {
    }

    // componentWillReceiveProps(nextProps){
    //     if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
    //        isOpen: nextProps.defaultOpen
    //     })
    // }

    renderTabelItems()
    {
    }

    render() {
        
            const {programm} = this.props
            //const time = this.state.isOpen && <section>{programm.time}</section>
            var array = programm
            return (
                <div>
                    <h3 className = 'title'>{programm.title}</h3>  
                <div className = 'channels'>
              
                    {array.prog.map(el => 
                    el.id < 5 ?
                    <dl>
                        <div><dt>{el.time}</dt></div>
                        <div><dt>{el.name}</dt></div>
                    </dl>
                    :
                    !this.state.isOpen &&
                    <dl>
                        <div><dt>{el.time}</dt></div>
                        <div><dt>{el.name}</dt></div>
                    </dl>
                    )
                    }
                   <button onClick={this.handleClick} className = 'btn'>
                            {this.state.isOpen ? 'открыть' : 'свернуть'}
                     </button>
                </div>
                </div>
                
            )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Programm
