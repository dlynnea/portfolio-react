import React from 'react'
import Main from '../components/Main'
import Projects from '../components/Projects'

export default function Home(props) {

    return(
        <div>
            <div className="title-container">
                <Main title={props.title} subtitle={props.subtitle} text={props.text} />
            </div>
            <Projects />
        </div>
    )
}