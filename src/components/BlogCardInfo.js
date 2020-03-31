import React from 'react'
import { useSpring, animated } from 'react-spring';


function BlogCardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}})

    return(
        <animated.div className="blog-card-info" style={style}>
            <p className="blog-card-title">{props.title}</p>
            <p className="blog-card-subtitle">{props.subtitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
        </animated.div>
    )
}

export default BlogCardInfo;