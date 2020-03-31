import React from 'react'
import BlogCardInfo from './BlogCardInfo'

function BlogCard(props) {

    return(
        <div className="blog-card" onClick={(event) => props.click(props.item)}>
            <img className="blog-card-image" src={props.item.img} alt={props.item.img} />
            { props.item.selected && <BlogCardInfo title={props.item.title} subtitle={props.item.subtitle} link={props.item.link}/>}
        </div>
    )
}
//blog-inline-block 

export default BlogCard;