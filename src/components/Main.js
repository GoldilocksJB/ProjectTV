import React, {Component} from 'react'
import Programm from './Programm'
import programms from '../tv-programm'
import ProgrammList from './ProgrammList/index'

class Main extends Component {
       
    render() {
        return (
            <div>
                <h1>Телепрограмма</h1>
                <ProgrammList programms = { programms }/>
            </div>
        )
    }

}

export default Main