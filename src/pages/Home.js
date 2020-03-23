import React from 'react'
import Main from '../components/Main'
import Projects from '../components/Projects'

export default function Home(props) {

    return(
        <div>
            <Main title={props.title} subtitle={props.subtitle} text={props.text} />
            <Projects />
        </div>
    )
}