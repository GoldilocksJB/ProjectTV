import React from 'react'
import Programm from '../Programm'

import "./style.css"

export default function ProgrammList({ programms }) {
    const programmElements = programms.map((programm, index) =>
        < li key={programm.id} className="programm-list_li">
             <Programm programm={programm} defaultOpen = {index < 4}/>
        </li>
    )
    return (
        <ul>
            {programmElements}
        </ul>
    )
}