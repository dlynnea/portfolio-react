import React from 'react'
import Main from '../components/Main'
import Carousel from '../components/Carousel'

export default function Home(props) {

    return(
        <div>
            <Main title={props.title} subtitle={props.subtitle} text={props.text} />
            <Carousel />
        </div>
    )
}