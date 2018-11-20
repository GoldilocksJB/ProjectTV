import React, {Component} from 'react'
//import Programm from './Programm'
import programms from '../tv-programm'
import ProgrammList from './ProgrammList/index'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Main extends Component {
       
    render() {
        return (
            <div>
              //  <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
        
                <section>
                <ProgrammList programms = { programms }/>
                </section>
              //  </ReactCSSTransitionGroup>
            </div>
        )
    }

}

export default Main