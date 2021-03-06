import React from 'react'
import Main from '../components/Main'
import Links from '../components/Links'

function Blog(props) {
    return(
        <div>
            <div className="title-container">
            <Main title={props.title} subtitle={props.subtitle} text={props.text} />
            </div>
            <Links />
        </div>
    )
}

export default Blog;